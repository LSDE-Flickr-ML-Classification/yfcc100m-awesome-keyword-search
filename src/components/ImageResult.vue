<template>
    <div class="card image-card">
       <a :id="`popover-target-${get_id()}`" target="_blank" :href="get_flickr_url()">
           <div class="hover-container">
               <LazyImage :imgsrc="get_image_url()"></LazyImage>
            </div>
        </a>
        <b-popover :target="`popover-target-${get_id()}`" triggers="hover" placement="top">
            <small>Confidence {{get_confidence()}}</small>
            <p v-if="get_other_tags().length > 0 ">
                <small>See also:</small> <br/>
                <button class="badge badge-primary" v-for="(label, index) in get_other_tags()" v-bind:key="index" v-on:click="label_clicked(label)">{{label}}</button>
            </p>
       </b-popover>
    </div>
</template>

<script>
    import LazyImage from "./LazyImage";

    export default {
        name: 'ImageResult',
        components: {
            LazyImage
        },
        props: {
            data: Array,
            label_list: Array,
            current_keyword: String
        },
        data: function () {
            return {
                message: null,
                inverted_list : {}
            }
        },
        created: function () {
        },
        methods: {
            get_id() {
                return this.data[0]
            },
            get_confidence() {
                return this.data[6]
            },
            get_image_url() {
                return `https://farm${this.data[2]}.staticflickr.com/${this.data[3]}/${this.data[0]}_${this.data[4]}.${this.data[5]}`
            },
            get_flickr_url() {
                return `https://www.flickr.com/photos/${this.data[1]}/${this.data[0]}`
            },
            get_other_tags() {

                return this.data[7].map((val) => {
                    return this.label_list[val]
                }).filter(label => label != this.current_keyword)
            },
            label_clicked(label) {
                this.$emit("labelClicked", { "label": label })
            }
        }
    }
</script>

<style scoped>
    .image-card {
        width: 25%;
    }
</style>
