<template>
    <div class="search-bar">
        <div v-if="loaded_search_data" class="container p-0">
            <div class="row">
                <ImageSearchBar ref="searchBar" v-bind:availableKeywords="available_keywords"
                                :currentQueryLabel.sync="current_keyword"
                                v-on:searchTriggered="searchTriggerd"></ImageSearchBar>
            </div>
            <div v-if="message" class="row">
                <div class="col-12 text-danger">
                    {{ message }}
                </div>
            </div>
            <div v-if="current_keyword && message == null" class="row">
                <div class="col-12">
                    <div class="container p-0">
                        <div class="row">
                            <div class="col-12">
                                <div class="row mb-1">
                                    <div class="col-4 col-sm-3 col-md-2 p-0 text-left">
                                        <div v-if="canLoadLess()" v-on:click="load_first" class="btn btn-sm btn-secondary"><span style='font-size: 1rem;'>&#8676;</span></div>
                                        <div v-if="canLoadLess()" v-on:click="load_less" class="btn btn-sm btn-secondary"><span style='font-size: 1rem;'>&larr;</span></div>
                                    </div>
                                    <div class="col-4 col-sm-6 col-md-8 text-center p-0">
                                        <small v-if="!querying">Showing images {{ get_baseline() + page_begin() + 1}} to {{ get_baseline() + page_end()}} from  {{ get_total_image_count() }} - Page {{calculate_page_num()}} / {{ Math.ceil( get_total_image_count() / page_size) }} </small>
                                    </div>
                                   <div class="col-4 col-sm-3 col-md-2 p-0 text-right">
                                        <div v-if="canLoadMore()" v-on:click="load_more" class="btn btn-sm btn-secondary"><span style='font-size: 1rem;'>&rarr;</span></div>
                                        <div v-if="canLoadMore()" v-on:click="load_last" class="btn btn-sm btn-secondary text-b"><span style='font-size: 1rem;'>&#8677;</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="!querying" id="result-box" class="row">
                            <ImageResult v-for="(item, index) in flickrImageItems.slice(page_begin(), page_end())"
                                         v-bind:key="index" v-bind:data="item" v-bind:label_list="available_keywords"
                                         v-bind:current_keyword="current_keyword"
                                         v-on:labelClicked="labelClicked"></ImageResult>
                        </div>
                        <div v-else>
                            <div class="col-12 text-center">
                                <b-spinner type="grow" label="Loading..."></b-spinner>
                            </div>
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
                current_keyword: null,
                chunkApi: new ChunkAPI("./"),
                flickrImageItems: [],
                page_index: 0,
                bucket_index: 0,
                page_size: 100,
                bucket_size: 30000,
                message: null,
                querying: true
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
            })
        },
        methods: {
            fetch(keyword) {
                let jsonResult = this.chunkApi.get(keyword);
                return jsonResult;
            },
            process_chunk(chunk) {
                chunk.then((resp) => {
                    this.flickrImageItems = resp.data;
                }).catch(() => {
                    // TODO: Major error --> inverted list and folder structure diverge
                }).finally(() => {
                    this.querying = false
                });
            },
            page_begin() {
                return this.page_index * this.page_size
            },
            page_end() {
                return Math.min((this.page_index + 1) * this.page_size, this.flickrImageItems.length)
            },
            load_more() {
                let {page_index, bucket_index} = this.increment_bucket_page_indices()

                if (page_index == null || bucket_index == null) {
                    return;
                }

                this.page_index = page_index;
                this.bucket_index = bucket_index;

                this.query();
            },
            get_baseline() {
                return this.bucket_index * this.bucket_size
            },
            load_less() {
                let {page_index, bucket_index} = this.decrement_bucket_page_indices()

                if (page_index == null || bucket_index == null) {
                    return;
                }

                this.page_index = page_index;
                this.bucket_index = bucket_index;

                this.query();
            },
            load_last() {

                let last_bucket_size = this.get_total_image_count() - (this.get_available_buckets_indices().length - 1) * this.bucket_size

                this.page_index = Math.floor(last_bucket_size / this.page_size)
                this.bucket_index = this.get_available_buckets_indices().length - 1
                this.query();

            },
            load_first() {
                this.page_index = 0
                this.bucket_index = 0
                this.query();
            },
            calculate_page_num() {
                return this.page_index + 1 + this.bucket_index * (this.bucket_size / this.page_size)
            },
            increment_bucket_page_indices() {
                if (!this.inverted_list.hasOwnProperty(this.current_keyword)) {
                    return null
                }

                // check if there is a next page
                if (this.page_begin() + this.page_size < this.flickrImageItems.length) {
                    return {"page_index": this.page_index + 1, "bucket_index": this.bucket_index}
                }

                // check if there is a next bucket
                if (this.bucket_index + 1 < this.get_available_buckets_indices().length - 1) {
                    return {"page_index": 0, "bucket_index": this.bucket_index + 1}
                }

                return null;
            },
            decrement_bucket_page_indices() {
                if (!this.inverted_list.hasOwnProperty(this.current_keyword)) {
                    return null
                }

                // check if there is a previous page
                if (this.page_begin() - this.page_size >= 0) {
                    return {"page_index": this.page_index - 1, "bucket_index": this.bucket_index}
                }

                // check if there is a previous bucket
                if (this.bucket_index - 1 >= 0) {
                    return {
                        "page_index": Math.floor(this.bucket_size / this.page_size),
                        "bucket_index": this.bucket_index - 1
                    }
                }

                return null;
            },
            canLoadMore() {
                if (!this.inverted_list.hasOwnProperty(this.current_keyword)) {
                    return false
                }

                // check if there is a next page
                if (this.page_begin() + this.page_size < this.flickrImageItems.length) {
                    return true
                }

                // check if there is a next bucket
                if (this.bucket_index + 1 < this.get_available_buckets_indices().length - 1) {
                    return true
                }

                return false;
            },
            canLoadLess() {
                if (!this.inverted_list.hasOwnProperty(this.current_keyword)) {
                    return false
                }

                // check if there is a previous page
                if (this.page_begin() - this.page_size >= 0) {
                    return true
                }

                // check if there is a previous bucket
                if (this.bucket_index - 1 >= 0) {
                    return true
                }

                return false;
            },
            searchTriggerd(event) {
                this.current_keyword = event.label.toLowerCase()

                this.search()
            },
            search() {
                this.$refs.searchBar.refreshInput(this.current_keyword)
                if (!this.inverted_list.hasOwnProperty(this.current_keyword)) {
                    // TODO: Feedback that item not exists nicer
                    this.message = "no results"
                    this.flickrImageItems = [];
                } else {
                    this.bucket_index = 0;
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
            get_current_bucket() {
                return this.get_available_buckets_indices()[this.bucket_index];
            },
            get_available_buckets_indices() {
                if (this.inverted_list[this.current_keyword] == null) {
                    return [];
                }
                return this.inverted_list[this.current_keyword]["buckets"];
            },
            get_total_image_count() {
                if (this.inverted_list[this.current_keyword] == null) {
                    return null;
                }
                return this.inverted_list[this.current_keyword]["count"];
            },
            query() {
                this.querying = true
                let chunk_id = this.get_current_bucket()
                // currently only use first keyword:
                let chunk = this.fetch(chunk_id);
                this.process_chunk(chunk, this.current_keyword)

                return;
            }
        }
    }
</script>

<style scoped>

</style>
