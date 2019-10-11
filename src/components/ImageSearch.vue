<template>
    <div class="search-bar">
        <div v-if="loaded_search_data" class="container">
            <div class="row">
                <ImageSearchBar v-on:searchTriggered="search"></ImageSearchBar>
            </div>
            <div class="row">
                <div class="col-12">
                    <div id="result-box" class="row">
                        <ImageResult v-for="item in flickrImageItems" v-bind:data="item" v-bind:key="item.id"></ImageResult>
                    </div>
                </div>
            </div>
            <div v-if="true" class="row mt-4 mb-4">
                <div class="col-12">
                    <div v-on:click="load_more" class="btn btn-sm btn-secondary">Load more...</div>
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
                inverted_list : {},
                available_tags: [],
                loaded_search_data: false,
                keyword_list: [ "park bench"],
                chunkApi: new ChunkAPI("/"),
                flickrImageItems: [],
            }
        },
        created: function () {
            // Load inverted list and available tags
            let queryAvailKeywords = this.chunkApi.fetch_available_keywords_list();
            let queryInvertedList = this.chunkApi.fetch_inverted_list();
            Promise.all([queryAvailKeywords, queryInvertedList]).then( (response) => {
                [this.available_tags, this.inverted_list] = response;
                this.loaded_search_data = true;
                this.query();
            })
        },
        methods: {
            fetch (keyword) {
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
            },
            search(event) {
                this.keyword_list = event.keyword_list

                if (!this.inverted_list.data.hasOwnProperty(this.keyword_list[0])) {
                    // TODO: Feedback that item not exists
                } else {
                    this.page_index = 1;
                    this.message = null;
                    this.flickrImageItems = [];
                    this.query();
                }
            },
            query() {
                let keyword = this.keyword_list[0];
                let chunk_id = this.inverted_list.data[keyword][0];
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