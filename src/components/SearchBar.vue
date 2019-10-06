<template>
    <div class="search-bar">
        <div class="container">
            <div class="row">
                <div class="col-8 text-left">
                    <input class="form-control" type="text" placeholder="Type Your Keywords" v-model="keyword_string">
                    <small>Currently only first keyword searched</small>
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
                            {{ item.title }}
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
                message: null
            }
        },
        created: function () {
            // some init stuff?
        },
        methods: {
            fetch (keyword, page_index) {
                window.console.log(`fetching for ${keyword}`);
                let jsonResult = this.chunkApi.get(keyword, page_index);
                return jsonResult;
            },
            process_chunk(chunk, keyword) {
                chunk.then((resp) => {
                    let resultArray = resp.data.result;
                    // preprocess the flickr results:
                    let flickrItems = resultArray.map((value, index, array) => {
                        // currently no preprocessing done -> maybe we have to 🤔
                        return value;
                    })

                    this.flickrImageItems = flickrItems;

                    window.console.log(resultArray);
                }).catch(() => {
                    let checkExists = this.chunkApi.exists(keyword);
                    checkExists.then(() => {
                        this.message = "no more results to load";
                    }).catch(() => {
                        this.message = "tag does not exist";
                        this.flickrImageItems = [];
                    })
                });
            },
            load_more(event) {
                this.page_index += 1;
                this.query();
            },
            search(event) {
                window.console.log("search clicked");

                this.page_index = 1;
                this.message = null;
                this.flickrImageItems = [];
                this.query();
            },
            query() {
                let keywords = this.keyword_string.split(' ');
                // currently only use first keyword:
                let chunk = this.fetch(keywords[0], this.page_index);
                this.process_chunk(chunk, keywords[0])

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