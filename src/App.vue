<template>
  <div id="app">
    
    <router-view/>
    
  </div>
</template>

<script>
//import FavoriteBooks from '@/components/FavoriteBooks'

export default {
  name: 'App',
  // components: {
  //  'favorite-books': FavoriteBooks
  //},
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
