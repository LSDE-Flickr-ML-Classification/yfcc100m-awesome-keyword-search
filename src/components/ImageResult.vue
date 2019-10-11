<template>
    <div class="card image-card">
        <a :id="`popover-target-${data.image_id}`" target="_blank" :href="data.flickr_url">
            <div class="hover-container">
                <img class="card-img-top-contain overlay" :src="data.image_url">
                <img class="card-img-top" :src="data.image_url">
            </div>
        </a>
        <b-popover :target="`popover-target-${data.image_id}`" triggers="hover" placement="top">
            <template v-slot:title>{{data.title}}</template>
            <small>Confidence {{data.confidence}}</small>
        </b-popover>
    </div>
</template>

<script>
    export default {
        name: 'ImageResult',
        props: {
            data: Object
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