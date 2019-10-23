<template>
    <div class="search-bar">
        <div v-if="loaded_search_data" class="container">
            <div class="row">
                <ImageSearchBar v-bind:availableKeywords="available_keywords"
                                v-on:searchTriggered="search"></ImageSearchBar>
            </div>
            <div class="row">
                <div class="col-12">
                  <div v-on:click="reset_page" class="btn btn-sm btn-secondary" v-if="page_start>1">Jump to Start</div>
                  <div v-on:click="final_page" class="btn btn-sm btn-secondary" v-if="(page_end+8)<results_end">Jump to End</div>
                  <div v-if="canLoadMore" class="row mt-4 mb-4">
                      <div class="col-12">
                          <div v-on:click="load_less" class="btn btn-sm btn-secondary" v-if="page_number>1"> Back </div>
                          <div class="btn btn-sm btn-secondary">Page Number: {{page_number}} </div>
                          <div v-on:click="load_more" class="btn btn-sm btn-secondary" v-if="(page_end+8)<results_end">Next >></div>
                      </div>
                    </div>
                    <div class="container">
                        {{ message }}
                        <div id="result-box" class="row">
                            <ImageResult v-for="item in flickrImageItems.slice(page_start,page_end)" v-bind:data="item"></ImageResult>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="col-12 text-center">
                <b-spinner type="grow" label="Loading..."></b-spinner>
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
                page_start: 1,
                page_end:9,
                page_number:1,
                results_end:10000,
                message: null
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
            final_page() {
                // TODO: Implement
                //this.page_index += 1;
                this.page_start=this.results_end-9;
                this.page_end=this.results_end-1;
                this.page_number= Math.floor(this.results_end/8);
                //this.query();
            },
            reset_page() {
                // TODO: Implement
                //this.page_index += 1;
                this.page_start=1;
                this.page_end=9;
                this.page_number=1;
                //this.query();
            },
            load_less() {
                // TODO: Implement
                //this.page_index += 1;
                this.page_start-=9;
                this.page_end-=9;
                this.page_number-=1;
                //this.query();
            },
            load_more() {
                // TODO: Implement
                //this.page_index += 1;
                this.page_start+=9;
                this.page_end+=9;
                this.page_number+=1;
                //this.query();
            },
            canLoadMore() {
                return this.inverted_list[this.keyword_list[0]]["buckets"].length - 1 > this.page_index + 1;
            },
            search(event) {
                this.keyword_list = event.keyword_list
                this.page_start=1
                this.page_end=9
                this.page_number=1

                if (!this.inverted_list.hasOwnProperty(this.keyword_list[0])) {
                    // TODO: Feedback that item not exists nicer
                    this.message = "no results"
                    this.flickrImageItems = [];
                } else {
                    this.page_index = 0;
                    this.message = null;
                    this.flickrImageItems = [];
                    this.query();
                }
            },
            query() {
                let keyword = this.keyword_list[0];
                let chunk_id = this.inverted_list[keyword]["buckets"][this.page_index];
                this.results_end = this.inverted_list[keyword]["count"];
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
