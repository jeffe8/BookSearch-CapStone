<template>
    <ul class="favorite-books">
        <li><h2>Favorite Books</h2></li>
        <li v-if="favoriteBooks.length < 1">No favorites books to display.</li>
        <li v-for="book in favoriteBooks">
        <router-link v-bind:to="{ name: 'BookSearchApp', params: { bookId: book.id } }">{{ book.volumeInfo.title }}</router-link> <button v-on:click="removeBook(book)" class="remove">x</button>
        
        </li>
    </ul>
</template>

<script>
export default {
  name: 'FavoriteBooks',
  data () {
    return {}
  },
  props: {
    favoriteBooks: Array
  },
  methods: {
    removeBook: function (book) {
      this.favoriteBooks.splice(this.favoriteBooks.indexOf(book), 1);
      this.$ls.set('favoriteBooks', this.favoriteBooks);
    }
  }
}
</script>

<style scoped>
.favorite-books {
  list-style-type: none;
  padding: 10px;
  background: #ccc;

}
.remove {
  font-size: 0.8rem;
  color: white;
  background: #AA0000;
  padding: 2px;
  cursor: pointer;
}
</style>