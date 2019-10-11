<template>
    <div class="search-bar">
        <div v-if="inverted_list.data != null" class="container">
            <div class="row">
                <div class="input-group mb-3 col-12">
                    <input v-model="keyword_string" @keyup.enter="search" type="text" class="form-control" placeholder="Type keyword..." aria-label="Keyword Search" aria-describedby="button-add">
                    <div class="input-group-append">
                        <button v-on:click="search" class="btn btn-primary" type="button" id="button-add">Search</button>
                    </div>
                </div>
            </div>
            <div v-if="message" class="row">
                <div class="col-12">
                    {{ message }}
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div id="result-box" class="row">
                        <ImageResult v-for="item in flickrImageItems" v-bind:data="item" v-bind:key="item.id"></ImageResult>
                    </div>
                </div>
            </div>
            <div v-if="flickrImageItems.length > 0 && !message" class="row">
                <div class="col-12">
                    <div v-on:click="load_more" class="btn btn-sm btn-secondary">Load more...</div>
                </div>
            </div>
        </div>
        <div v-else>
            <b-spinner type="grow" label="Loading..."></b-spinner>
        </div>
    </div>
</template>

<script>

    import ChunkAPI from "../utils/chunk-api.js";
    import ImageResult from "./ImageResult";

    export default {
        name: 'SearchBar',
        components: {
            ImageResult
        },
        props: {
            msg: String
        },
        data: function () {
            return {
                keyword_string: "park bench",
                chunkApi: new ChunkAPI("/"),
                flickrImageItems: [],
                page_index: 1,
                message: null,
                inverted_list : {}
            }
        },
        created: function () {
            // some init stuff?
            this.chunkApi.fetch_inverted_list().then( (inverted_list) => {
                this.inverted_list = inverted_list;
                this.search();
            })
        },
        methods: {
            fetch (keyword) {
                window.console.log(`fetching for ${keyword}`);
                let jsonResult = this.chunkApi.get(keyword);
                return jsonResult;
            },
            process_chunk(chunk) {
                chunk.then((resp) => {
                    let resultArray = resp.data;
                    // preprocess the flickr results:

                    this.flickrImageItems = resultArray;

                    window.console.log(resultArray);
                }).catch(() => {
                    // TODO: Major error --> inverted list and folder structure diverge
                });
            },
            load_more() {
                this.page_index += 1;
                this.query();
            },
            search() {

                let keyword = this.keyword_string;

                window.console.log("search clicked");

                if (!this.inverted_list.data.hasOwnProperty(keyword)) {
                    // TODO: Feedback that item not exists
                } else {
                    this.page_index = 1;
                    this.message = null;
                    this.flickrImageItems = [];
                    this.query();
                }

            },
            query() {
                let keyword = this.keyword_string;
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