<template>
    <div class="container p-0 no-gutters mb-3">
        <div class="col-12 p-0 mb-2">
            <LabelCloud class="w-100" v-on:labelClicked="labelClicked"></LabelCloud>
        </div>
        <div class="input-group col-12">
            <input v-model="currentSearchString" @input="onChange" type="text"
                   class="form-control" @keydown.down="onArrowDown" @keydown.up="onArrowUp" @keydown.enter="onEnter"
                   v-on:blur="onLeave" placeholder="Type keyword..." aria-label="Keyword Search"
                   aria-describedby="button-add">
            <div class="input-group-append">
                <button v-on:click="randomSearch" class="btn btn-secondary" type="button" id="button-random">🎲</button>
                <button v-on:click="searchTriggered" class="btn btn-primary" type="button" id="button-search">Search</button>
            </div>
        </div>
        <div class="autocomplete m-0 col-12 border border-top-0 border-light rounded-bottom border-secondary">
            <ul v-show="isOpen" class="autocomplete-results list-group-flush list-group">
                <li v-for="(result, i) in results" :key="i" @click="setResultOnClick(result)"
                    class="autocomplete-result list-group-item-action list-group-item"
                    :class="{ 'active ': i === arrowCounter }">
                    {{ result }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
        import LabelCloud from "./LabelCloud";

    export default {
        name: 'ImageSearchBar',
        components: {
            LabelCloud,
        },
        props: {
            availableKeywords: {
                type: Array,
                required: false,
                default: () => [],
            },
            currentQueryLabel: String
        },
        data: function () {
            return {
                results: [],
                isOpen: false,
                arrowCounter: -1,
                currentSearchString: this.currentQueryLabel
            }
        },
        methods: {
            searchTriggered() {
                this.$emit("searchTriggered", {label: this.currentSearchString})
            },
            randomSearch() {
                this.$emit("searchTriggered", {label: this.availableKeywords[Math.floor(Math.random() * this.availableKeywords.length)]})
            },
            onChange() {
                this.isOpen = true;
                this.filterResults();
            },
            filterResults() {
                this.results = this.availableKeywords.filter(item => item.toLowerCase().indexOf(this.currentSearchString.toLowerCase()) > -1);
            },
            setResultOnClick(result) {
                this.currentSearchString = result;
                this.isOpen = false;
                this.$emit("searchTriggered", {label: this.currentSearchString})
            },
            refreshInput(currentKeyword) {
                this.currentSearchString = currentKeyword;
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
                    this.currentSearchString = this.results[this.arrowCounter];
                }

                this.isOpen = false;
                this.arrowCounter = -1;
                this.$emit("searchTriggered", { label: this.currentSearchString})
            },
            handleClickOutside(evt) {
                if (!this.$el.contains(evt.target)) {
                    this.isOpen = false;
                    this.arrowCounter = -1;
                }
            },
            labelClicked(word) {
                this.currentSearchString = word;
                this.$emit("searchTriggered", { label: this.currentSearchString})
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
        position: absolute;
        left: 0px; right: 0px;
        z-index: 999999;
    }

    .autocomplete-results {
        padding: 0;
        margin: 0;
        border: 0px;
        max-height: 50vh;
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
