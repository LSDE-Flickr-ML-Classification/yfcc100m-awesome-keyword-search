<template>
    <div class="search-bar">
        <div v-if="loaded_search_data" class="container p-0">
            <div class="row">
                <ImageSearchBar ref="searchBar" v-bind:availableKeywords="available_keywords"
                                :currentQueryLabel.sync="current_keyword"
                                v-on:searchTriggered="searchTriggerd"></ImageSearchBar>
            </div>
            <div class="row">
                <div class="col-12">
                    <div v-on:click="reset_page" class="btn btn-sm btn-secondary" v-if="page_start>1">Jump to Start
                    </div>
                    <div v-on:click="final_page" class="btn btn-sm btn-secondary" v-if="(page_end+20)<bucket_lenght && bucket_lenght>0">Jump
                        to End
                    </div>
                    <div v-if="canLoadMore" class="row mt-4 mb-4">
                        <div class="col-12">
                            <div v-on:click="load_less" class="btn btn-sm btn-secondary" v-if="page_number>1 && bucket_lenght>0"> Back</div>
                            <div v-on:click="load_less2" class="btn btn-sm btn-secondary" v-if="page_number>2 && bucket_lenght>0">[{{page_number-2}}]</div>
                            <div v-on:click="load_less" class="btn btn-sm btn-secondary" v-if="page_number>1 && bucket_lenght>0">[{{page_number-1}}] </div>
                            <div class="btn btn-sm btn-secondary" v-if="bucket_lenght>0">Current Page: [ {{ page_number }} ]</div>
                            <div v-on:click="load_more" class="btn btn-sm btn-secondary" v-if="(page_end+20)<bucket_lenght && bucket_lenght>0">[ {{page_number+1}} ] </div>
                            <div v-on:click="load_more2" class="btn btn-sm btn-secondary" v-if="(page_end+40)<bucket_lenght && bucket_lenght>0">[ {{page_number+2}} ]</div>
                            <div v-on:click="load_more" class="btn btn-sm btn-secondary" v-if="(page_end+20)<bucket_lenght && bucket_lenght>0">Next >> </div>
                        </div>
                    </div>
                    <div class="container p-0">
                        {{ message }}
                        <div id="result-box" class="row">
                            <ImageResult v-for="(item,index) in flickrImageItems.slice(page_start,page_end)"
                                         v-bind:key="index" v-bind:data="item" v-bind:label_list="available_keywords"
                                         v-bind:current_keyword="current_keyword"
                                         v-on:labelClicked="labelClicked"></ImageResult>
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
                flickrImageItems: [],
                flickrImageItems_buffer: [],
                page_index: 0,
                page_start: 1,
                query_was_called: 0,
                page_end: 21,
                page_number: 1,
                multiple_buckets: 0,
                results_end: 10000,
                bucket_start_index: 500,
                bucket_checker: 1,
                bucket_lenght: 0,
                bucket_count: 0,
                current_keyword: null,
                chunkApi: new ChunkAPI("/"),
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
                    this.flickrImageItems_buffer = resultArray;
                    this.flickrImageItems = this.flickrImageItems.concat(this.flickrImageItems_buffer)
                    this.bucket_lenght = this.flickrImageItems.length;

                }).catch(() => {
                    // TODO: Major error --> inverted list and folder structure diverge
                });
            },
            final_page() {

              if(this.multiple_buckets==2)
              {
                this.page_index+=this.bucket_count;
                this.multiple_buckets=1;
                this.flickrImageItems=[];
                this.page_number = Math.floor(this.results_end/20);
                this.query();
                this.page_start = this.bucket_lenght - 20;
                this.page_end = this.bucket_lenght;
              }
              else {
                this.page_start = this.bucket_lenght - 21;
                this.page_end = this.bucket_lenght - 1;
                this.page_number = Math.floor(this.results_end/20);
              }
            },
            reset_page() {
                this.page_start = 1;
                this.page_end = 21;
                this.page_number = 1;
            },
            load_less() {
                this.page_start -= 21;
                this.page_end -= 21;
                this.page_number -= 1;
            },
            load_less2() {
                this.page_start -= 42;
                this.page_end -= 42;
                this.page_number -= 2;
            },
            load_more2() {
                this.page_start += 42;
                this.page_end += 42;
                this.page_number += 2;
            },
            load_more() {

                if(this.multiple_buckets > 1 && this.page_start==this.bucket_start_index)
                {
                  if(this.multiple_buckets>2)
                  {
                    this.multiple_buckets-=1;
                    this.flickrImageItems=[];
                    this.page_index+=1;
                    this.query();
                    this.page_start=1;
                    this.page_end=21;
                    this.page_number=this.bucket_start_index+1;
                    this.bucket_start_index+=500;

                  }
                  else {
                    this.page_index+=this.bucket_count;
                    this.multiple_buckets=1;
                    this.flickrImageItems=[];
                    this.query();
                    this.page_number = Math.floor(this.results_end/ 20);
                    this.page_start = this.bucket_lenght - 20;
                    this.page_end = this.bucket_lenght;
                  }
                }
                else {
                  this.page_start += 21;
                  this.page_end += 21;
                  this.page_number += 1;
                  }
            },
            canLoadMore() {
                return this.inverted_list[this.current_keyword]["buckets"].length - 1 > this.page_index + 1;
            },
            searchTriggerd(event) {
                this.current_keyword = event.label
                this.search()
            },
            search() {
                this.page_start = 1
                this.page_end = 21
                this.page_number = 1
                this.$refs.searchBar.refreshInput(this.current_keyword)
                if (!this.inverted_list.hasOwnProperty(this.current_keyword)) {
                    this.message = "no results"
                    this.flickrImageItems = [];
                } else {
                    this.page_index = 0;
                    this.message = null;
                    this.query();
                }
                if(this.bucket_count > 1)
                {
                  this.multiple_buckets = this.bucket_count+1;
                  this.flickrImageItems = [];
                }
                else
                {
                  this.multiple_buckets=1;
                }
            },
            labelClicked(e) {
                this.current_keyword = e.label
                this.search()
            },
            query() {
                let keyword = this.current_keyword;
                let chunk_id = this.inverted_list[keyword]["buckets"][this.page_index];
                this.results_end = this.inverted_list[keyword]["count"];
                this.bucket_count = this.inverted_list[keyword]["buckets"].length;
                this.query_was_called+=1;
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
