<template>
    <div class="input-group mb-3 col-12">
        <input v-model="keyword_string" @keyup.enter="searchTriggered" type="text" class="form-control" placeholder="Type keyword..." aria-label="Keyword Search" aria-describedby="button-add">
        <div class="input-group-append">
            <button v-on:click="searchTriggered" class="btn btn-primary" type="button" id="button-add">Search</button>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'ImageSearchBar',
        data: function () {
            return {
                keyword_string: "park bench"
            }
        },
        created: function () {
            // some init stuff?

        },
        methods: {
            searchTriggered() {
                this.$emit("searchTriggered", { keyword_list: [ this.keyword_string] } )
            }
        }
    }
</script>

<style scoped>

</style>