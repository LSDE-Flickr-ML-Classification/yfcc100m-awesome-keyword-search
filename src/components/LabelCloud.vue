<template>
    <div>
        <vue-word-cloud class="d-inline-block" style="min-height: 60vh;" v-on:update:progress="checkProgress"
                        :words="label_cloud" font-family="Roboto">
            <template slot-scope="{text, weight}">
                <div :title="text" style="cursor: pointer;" @click="onWordClick(text)">
                    {{ text }}
                </div>
            </template>
        </vue-word-cloud>
        <div v-if="!loaded" class="col-12 text-center">
            <b-spinner type="grow" label="Loading..."></b-spinner>
            <br/>
            {{ progress }}%
        </div>
    </div>
</template>

<script>
    import VueWordCloud from 'vuewordcloud';
    import ChunkAPI from "../utils/chunk-api";

    export default {
        name: 'LabelCloud',
        components: {
            [VueWordCloud.name]: VueWordCloud,
        },
        data: function () {
            return {
                label_cloud: [],
                chunkApi: new ChunkAPI("/"),
                loaded: false,
                progress: 0
            }
        },
        created: function () {
            let queryLabelCloud = this.chunkApi.fetch_label_cloud();

            Promise.all([queryLabelCloud]).then((response) => {
                let [r1] = response;

                this.label_cloud = r1.data;
            })
        },
        methods: {
            checkProgress(e) {
                if (!e) {
                    return;
                }
                if (e.completedWords == e.totalWords) {
                    this.loaded = true;
                }
                this.progress = Math.round(e.completedWords / e.totalWords) * 100;
            },
            onWordClick(word) {
                window.console.log(word);
                this.$emit("labelClicked", word)
            }
        }
    }
</script>
