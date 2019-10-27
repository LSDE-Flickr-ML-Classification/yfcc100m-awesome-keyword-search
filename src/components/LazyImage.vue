<template>
    <div class="lazy-image">
        <img v-if="!failed" v-bind:class=" loading ? 'd-none' : 'card-img-top-contain overlay' " @load="loaded" @error="handleError" :src="imgsrc">
        <img v-if="!failed" v-bind:class=" loading ? 'd-none' : 'card-img-top' " @load="loaded" :src="imgsrc">
        <div v-if="failed" class="error-message">
            <div class="col-12 mt-auto">
                This image has become unavailable 🥺
            </div>
        </div>
        <div v-if="loading && !failed" class="spinner-border text-dark" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LazyImage.vue",
        props: {
            imgsrc: String
        },
        data() {
            return {
                loading: true,
                failed: false,
            }
        },
        methods: {
            handleError() {
                this.failed = true
            },
                loaded() {
                    this.loading = false
                }
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

    .error-message {
        height: 15vw;
        font-size: 1vw;
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
