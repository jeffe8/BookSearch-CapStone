<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4"></div>
      <section class="col-md-4 headliner">
        
        <img src="../assets/BookSearchApp.jpg">
      </section>
      <section class="col-md-4">
        <favorite-books v-bind:favoriteBooks="favorites"></favorite-books>
      </section>
    </div>

    <section>
      <form v-on:submit.prevent="getBooks">

        <label for="query">Enter Title/Subject/Author:</label>
        <input
          type="text"
          v-model="query"
          placeholder="The Grapes of Wrath"
          id="query"
        ><br>
        <label for="pages">Results per Page</label>
        <select
          v-model="selected"
          id="pages"
        >
          <option>10</option>
          <option>20</option>
          <option>40</option>
        </select><br>
        <button
          class="btn btn-primary"
          type="submit"
        >Go</button>
      </form>
    </section>
    <section>
      <div class="results">
        <div>
          <ul
            class="booklist"
            v-if="results && results.items.length>0"
          >
            <li v-for="book in results.items">
              <h2>{{book.volumeInfo.title}}</h2>
              <ul>
                <li v-for="author in book.volumeInfo.authors">{{author}}</li>
              </ul>
              <p v-if="book.volumeInfo.imageLinks"><img v-bind:src="book.volumeInfo.imageLinks.thumbnail"></p>
              <p>{{book.volumeInfo.description}}</p>
              <h3>Publisher: {{book.volumeInfo.publisher}}
                <ul>
                  <li>First Published: {{book.volumeInfo.publishedDate}}</li>
                </ul>
              </h3>
              <button
                class="btn btn-primary"
                v-on:click="saveBook(book)"
                type="save"
              >Save Book to Favorites</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { API } from "@/common/api";
import BookSummary from '@/components/BookSummary';
import FavoriteBooks from '@/components/FavoriteBooks';


export default {
  name: "BookSearchApp",
  components: {
    'favorite-books': FavoriteBooks,
    },
  data() {
    return {
      query: "",
      results: undefined,
      selected: "10",
      favorites: []
    };
  },
  created () {
    if (this.$ls.get('favoriteBooks')){
      this.favorites = this.$ls.get('favoriteBooks')

    };
  },

  methods: {
    saveBook: function (book) {
    this.favorites.push(book);
    this.$ls.set('favoriteBooks', this.favorites)
   
   },

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
section.headliner img {
  width: 100%;
  height: 200px
}

@media only screen and (min-width: 600px) {
  section.headliner img {
  width: 100%;
  height: 375px
}
}

a {
  color: #42b983;
}
.results {
  margin: 0 100px;
}

</style>