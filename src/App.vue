<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>YFCC100M Awesome Keyword Search</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <SearchBar/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'app',
  components: {
    SearchBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
