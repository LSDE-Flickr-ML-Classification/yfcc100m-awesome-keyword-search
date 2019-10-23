<template>
    <div class="card image-card">
       <a :id="`popover-target-${get_id()}`" target="_blank" :href="get_flickr_url()">
            <div class="hover-container">
                <img class="card-img-top-contain overlay" :src="get_image_url()">
                <img class="card-img-top" :src="get_image_url()">
            </div>
        </a>
        <b-popover :target="`popover-target-${get_id()}`" triggers="hover" placement="top">
            <template v-slot:title>{{get_title()}}</template>
            <small>Confidence {{get_confidence()}}</small>
        </b-popover>
    </div>
</template>

<script>
    export default {
        name: 'ImageResult',
        props: {
            data: Array
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
            get_title() {
                return this.data[1]
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
        }
    }
</script>

<style scoped>
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

    .image-card {
        width: 25%;
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