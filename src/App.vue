<template>
  <div id="app">
    <div class="container-fluid p-0">
      <!-- Image and text -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/LSDE-Flickr-ML-Classification">About this</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <SearchBar/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/ImageSearch.vue'

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
  margin-top: 0px;
}

/*body { padding-top: 40px; }

@media screen and (max-width: 768px) {
  body { padding-top: 0px; }
}*/

</style>
