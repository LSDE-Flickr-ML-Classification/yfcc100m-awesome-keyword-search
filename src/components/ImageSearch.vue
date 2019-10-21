<template>
    <div class="search-bar">
        <div v-if="loaded_search_data" class="container">
            <div class="row">
                <ImageSearchBar v-bind:availableKeywords="available_keywords"
                                v-on:searchTriggered="search"></ImageSearchBar>
            </div>
        </div>

            <div class="row">
                <div class="col-12">
                  <div v-if="canLoadMore" class="row mt-4 mb-4">
                      <div class="col-12">
                          <div v-on:click="load_more" class="btn btn-sm btn-secondary">Next >> </div>
                      </div>
                 </div>
                    <div class="container">
                        <div id="result-box" class="row">
                            <ImageResult v-for="item,index in flickrImageItems" v-if="index < page_number && index > page_default" v-bind:data="item"
                                         v-bind:key="item.id"></ImageResult>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    import ChunkAPI from "../utils/chunk-api.js";
    import ImageResult from "./ImageResult";
    import ImageSearchBar from "./ImageSearchBar";

    export default {
        name: 'ImageSearch',
        components: {
            ImageResult,
            ImageSearchBar
        },
        data: function () {
            return {
                inverted_list: {},
                available_keywords: [],
                loaded_search_data: false,
                keyword_list: ["park bench"],
                chunkApi: new ChunkAPI("/"),
                flickrImageItems: [],
                page_index: 0,
                page_number: 9,
                page_default: 0
            }
        },
        created: function () {
            // Load inverted list and available tags
            let queryAvailKeywords = this.chunkApi.fetch_available_keywords_list();
            let queryInvertedList = this.chunkApi.fetch_inverted_list();
            Promise.all([queryAvailKeywords, queryInvertedList]).then((response) => {
                let [r1, r2] = response;
                this.available_keywords = r1.data;
                this.inverted_list = r2.data;
                this.loaded_search_data = true;
                this.query();
            })
        },
        methods: {
            fetch(keyword) {
                let jsonResult = this.chunkApi.get(keyword);
                return jsonResult;
            },
            process_chunk(chunk) {
                chunk.then((resp) => {
                    let resultArray = resp.data;
                    // preprocess the flickr results:
                    this.flickrImageItems = resultArray;
                }).catch(() => {
                    // TODO: Major error --> inverted list and folder structure diverge
                });
            },
            load_more() {

                this.page_index +=1;
                this.page_default+=9;
                this.page_number+=9;
                // TODO: Use page numbers to naviagate
                //this.page_number+=1;
                this.query();

            },
            canLoadMore() {
                return this.inverted_list[this.keyword_list[0]].length - 1 > this.page_index + 1;
            },
            search(event) {
                this.keyword_list = event.keyword_list

                if (!this.inverted_list.hasOwnProperty(this.keyword_list[0])) {
                    // TODO: Feedback that item not exists
                } else {
                    this.page_index = 0;
                    this.message = null;
                    this.flickrImageItems = [];
                    this.query();
                }
            },
            query() {
                let keyword = this.keyword_list[0];
                let chunk_id = this.inverted_list[keyword][this.page_index];
                // currently only use first keyword:
                let chunk = this.fetch(chunk_id);
                this.process_chunk(chunk, keyword)

                return;
            }
        }
    }
</script>

<style scoped>
</style>
