<template>
  <div class="begin">
  <favorite-cities v-bind:favoriteCities="favorites"></favorite-cities>    <h2>Book Search</h2>
  <message-container v-bind:messages="messages"></message-container>
    <form v-on:submit.prevent="getBooks">
        
          <label for="query">Enter Title/Subject/Author:</label>
          <input type="text" v-model="query" placeholder="The Grapes of Wrath" id="query"><br>
          <label for="pages">Results per Page</label>
          <select v-model="selected" id="pages">
            <option>10</option>
            <option>20</option>
            <option>40</option>
          </select><br>
          <button class="btn btn-primary" type="submit">Go</button>
    </form>
  <load-spinner v-if="showLoading"></load-spinner>

  <div class="results">
      <div>
          <ul class="booklist" v-if="results && results.items.length>0">
              <li v-for="book in results.items">
          <h2>{{book.volumeInfo.title}}</h2>
              <li v-for="author in book.volumeInfo.authors">{{author}}</li>
                  <p v-if="book.volumeInfo.imagesLinks"><img v-bind:src="book.volumeInfo.imageLinks.thumbnail"></p>
                  <p>{{book.volumeInfo.description}}</p> 
          <h3>Publisher:  {{book.volumeInfo.publisher}}
            <ul>
            <li>First Published:  {{book.volumeInfo.publishedDate}}</li>
            </ul>
          </h3>
          <button class="btn btn-primary" v-on:click="saveBook(book)" type="save">Save Book to Favorites</button>
              </li>
          </ul>
    </div>
  </div>
  </div>
</template>

<script>
import { API } from "@/common/api";
import BookSummary from '@/components/BookSummary';
import FavoriteBooks from '@/components/FavoriteBooks';
import MessageContainer from '@/components/MessageContainer';
import CubeSpinner from '@/components/CubeSpinner'


export default {
  name: "BookSearchApp",
  components: {
    'favorite-books': FavoriteBooks,
    'load-spinner': CubeSpinner,
    'message-container': MessageContainer
  },
  data() {
    return {
      query: "",
      results: undefined,
      selected: "10",
      messages: [],
      favorites: []
    };
  },
  created () {
    if (this.$ls.get('favoriteBooks')){
      this.favorites = this.$ls.get('favoriteBooks')

    };

  methods: {
    saveBook: function (book) {
    this.favorites.push(book);
    this.$ls.set('favoriteBooks', this.favorites)
    };

    getBooks: function () {
      this. results = null;
      this.showloading = true;
      let cacheLabel = `bookSearch_${this.query}`;
      let cacheExpiry = 15 * 60 * 1000; // 15 min in miliseconds

      if (!this.$ls.get(cacheLabel)){
        //No cache exisits - perform API Call
        console.log(`No cache detected for ${cacheLabel}.`);
        API.get("", {
        params: {
          q: this.query,
          maxResults: this.selected
        }
      })      
        .then(response => {
          this.results = response.data;
        })
        .catch(error => {
          this.errors.push(error);
        });
        } else {
        //Cache exisits.
        console.log(`Valid Cache detected for ${cacheLabel}.`);
        this.results = this.$ls.get(cacheLabel);
        this.showLoading = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
.results {
  margin: 0 100px;
}
</style>