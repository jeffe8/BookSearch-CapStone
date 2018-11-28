<template>
  <div class="begin">
  <favorite-books v-bind:favoriteBooks="favorites"></favorite-books>

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

    <div class="container-fluid results">
      <form v-on:save.prevent="saveBooks">
    <ul class="booklist" v-if="results && results.items.length>0">
      <li v-for="book in results.items">
          <h2>
          {{book.volumeInfo.title}}
          </h2>

          <ul>
            
            <li v-for="author in book.volumeInfo.authors">{{author}}</li>
          </ul>

          <p><img v-bind:src="book.volumeInfo.imageLinks.thumbnail"></p>
          <p>{{book.volumeInfo.description}}</p> 
          <h3>
            Publisher:  {{book.volumeInfo.publisher}}
            <ul>
            <li>First Published:  {{book.volumeInfo.publishedDate}}</li>
            </ul>
          </h3>
          <button class="btn btn-primary" type="save">Save Book</button>
      </li>
    </ul>
    </form>
    </div>
  </div>
</template>

<script>
import { API } from "@/common/api";
import FavoriteBooks from '@/components/FavoriteBooks';

export default {
  name: "BookSearchApp",
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
  },
  methods: {
    saveBook: function (book) {
    // this.favorites.push(book);
    // this.$ls.set('favoriteBooks', this.favorites);
    },

    getBooks() {
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
    }
  }
};
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