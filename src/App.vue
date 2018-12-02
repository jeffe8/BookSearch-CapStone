<template>
  <div id="app">
    <div class="row">
    <div class="col-sm">
    </div>
    <div class="col-sm">
      <img src="./assets/BookSearchApp.jpg">
    </div>
    <div class="col-md">
      <favorite-books v-bind:favoriteBooks="favorites"></favorite-books>
    </div>
  </div>
    <div>
    
    <router-view/>
    </div>
  </div>
</template>

<script>
import FavoriteBooks from '@/components/FavoriteBooks'

export default {
  name: 'App',
  components: {
    'favorite-books': FavoriteBooks
  },
  data() {
    return {
      query: "",
      results: undefined,
      selected: "10",
      favorites: []
    };
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
