<template>
    <div class="search-bar">
        <div v-if="inverted_list.data != null" class="container">
            <div class="row">
                <div class="col-8 text-left">
                    <input class="form-control" type="text" placeholder="Type Your Keywords" v-model="keyword_string" @keyup.enter="search">
                </div>
                <div class="col-4 text-left">
                    <div v-on:click="search" class="btn btn-primary">
                        Search
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
                    <ul id="result-box">
                        <li v-for="item in flickrImageItems">
                            {{ item.title }} ({{item.confidence}})
                            <a :href="item.flickr_url">flickr</a>
                        </li>
                    </ul>
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
                keyword_string: "cat",
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
</style>