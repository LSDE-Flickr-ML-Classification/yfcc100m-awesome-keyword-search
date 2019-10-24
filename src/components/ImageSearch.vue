<template>
    <div class="search-bar">
        <div v-if="loaded_search_data" class="container p-0">
            <div class="row">
                <ImageSearchBar ref="searchBar" v-bind:availableKeywords="available_keywords" :currentQueryLabel.sync="current_keyword"
                                v-on:searchTriggered="searchTriggerd"></ImageSearchBar>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="container p-0">
                        {{ message }}
                        <div id="result-box" class="row">
                            <ImageResult v-for="(item, index) in flickrImageItems.slice(0, 100)" v-bind:key="index" v-bind:data="item" v-bind:label_list="available_keywords" v-bind:current_keyword="current_keyword" v-on:labelClicked="labelClicked"></ImageResult>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="canLoadMore" class="row mt-4 mb-4">
                <div class="col-12">
                    <div v-on:click="load_more" class="btn btn-sm btn-secondary">Next page</div>
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
                current_keyword: null,
                chunkApi: new ChunkAPI("/"),
                flickrImageItems: [],
                page_index: 0,
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
            load_more() {
                // TODO: Implement
                this.page_index += 1;
                this.query();
            },
            canLoadMore() {
                return this.inverted_list[this.current_keyword]["buckets"].length - 1 > this.page_index + 1;
            },
            searchTriggerd(event) {
                this.current_keyword = event.label

                this.search()
            },
            search() {
                this.$refs.searchBar.refreshInput(this.current_keyword)
                 if (!this.inverted_list.hasOwnProperty(this.current_keyword)) {
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
            labelClicked(e) {
                this.current_keyword = e.label
                this.search()
            },
            query() {
                let keyword = this.current_keyword;
                let chunk_id = this.inverted_list[keyword]["buckets"][this.page_index];
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
