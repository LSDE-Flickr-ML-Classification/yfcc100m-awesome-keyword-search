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
                        <div v-for="item in flickrImageItems" class="card" style="width: 18rem;">
                            <a :id="`popover-target-${item.image_id}`" target="_blank" :href="item.flickr_url">
                                <div class="hover-container">
                                    <img class="card-img-top-contain overlay" :src="item.image_url">
                                    <img  class="card-img-top" :src="item.image_url">
                                </div>
                            </a>
                            <b-popover :target="`popover-target-${item.image_id}`" triggers="hover" placement="top">
                                <template v-slot:title>{{item.title}}</template>
                                <small>Confidence {{item.confidence}}</small>
                            </b-popover>
                        </div>
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

    export default {
        name: 'SearchBar',
        props: {
            msg: String
        },
        data: function () {
            return {
                keyword_string: "park_bench",
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
            process_chunk(chunk, keyword) {
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
    h3 {
        margin: 40px 0 0;
    }

    .card-img-top {
        width: 100%;
        height: 15vw;
        object-fit: cover;
    }

    .card-img-top-contain {
        width: 100%;
        height: 15vw;
        object-fit: contain;
    }
    .overlay {
        display: none;
    }
    .hover-container:hover .overlay {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background: radial-gradient(transparent, #FFFFFF);
    }
</style>