<template>
    <div class="container no-gutters mb-3">
        <div class="input-group col-12">
            <input v-model="keyword_search_string" @input="onChange" type="text"
                   class="form-control" @keydown.down="onArrowDown" @keydown.up="onArrowUp" @keydown.enter="onEnter"
                   v-on:blur="onLeave" placeholder="Type keyword..." aria-label="Keyword Search"
                   aria-describedby="button-add">
            <div class="input-group-append">
                <button v-on:click="searchTriggered" class="btn btn-primary" type="button" id="button-add">Search
                </button>
            </div>
        </div>
        <div class="autocomplete m-0 col-12">
            <ul v-show="isOpen" class="autocomplete-results list-group-flush list-group">
                <li v-for="(result, i) in results" :key="i" @click="setResult(result)"
                    class="autocomplete-result list-group-item-action list-group-item"
                    :class="{ 'active ': i === arrowCounter }">
                    {{ result }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'ImageSearchBar',
        props: {
            availableKeywords: {
                type: Array,
                required: false,
                default: () => [],
            },
        },
        data: function () {
            return {
                keyword_search_string: "park bench",
                results: [],
                isOpen: false,
                arrowCounter: -1,
            }
        },
        methods: {
            searchTriggered() {
                this.$emit("searchTriggered", {keyword_list: [this.keyword_search_string]})
            },
            onChange() {
                this.isOpen = true;
                this.filterResults();
            },
            filterResults() {
                this.results = this.availableKeywords.filter(item => item.toLowerCase().indexOf(this.keyword_search_string.toLowerCase()) > -1);
            },
            setResult(result) {
                this.keyword_search_string = result;
                this.isOpen = false;
            },
            onArrowDown() {
                if (this.arrowCounter < this.results.length) {
                    this.arrowCounter = this.arrowCounter + 1;
                    this.scroll();
                }
            },
            scroll() {
                setTimeout(() => {
                    const container = this.$el.querySelector(".active");
                    if (container) {
                        container.scrollIntoView(false);
                    }
                }, 10);

            },
            onArrowUp() {
                if (this.arrowCounter > 0) {
                    this.arrowCounter = this.arrowCounter - 1;
                    this.scroll();
                }
            },
            onLeave(evt) {
                if (!this.$el.contains(evt.target)) {
                    this.isOpen = false;
                    this.arrowCounter = -1;
                }
            },
            onEnter() {

                if (this.arrowCounter != -1) {
                    this.keyword_search_string = this.results[this.arrowCounter];
                }

                this.isOpen = false;
                this.arrowCounter = -1;
                this.$emit("searchTriggered", {keyword_list: [this.keyword_search_string]})
            },
            handleClickOutside(evt) {
                if (!this.$el.contains(evt.target)) {
                    this.isOpen = false;
                    this.arrowCounter = -1;
                }
            },
            mounted() {
                document.addEventListener('click', this.handleClickOutside);
            },
            destroyed() {
                document.removeEventListener('click', this.handleClickOutside);
            }
        }
    }
</script>

<style scoped>
    .autocomplete {
        position: relative;
    }

    .autocomplete-results {
        padding: 0;
        margin: 0;
        border: 0px;
        max-height: 10vh;
        overflow: auto;
        width: 100%;
    }

    .autocomplete-result {
        list-style: none;
        text-align: left;
        padding: 4px 2px;
        cursor: pointer;
    }
</style>
