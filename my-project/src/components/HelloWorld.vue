<template>
  <div class="begin">
    <form v-on:submit.prevent="getBooks">
        <p>Enter Title/Subject/Author: <input type="text" v-model="query" placeholder="The Grapes of Wrath"> <button type="submit">Go</button></p>
    </form>
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
            
      </li>
    </ul>
  </div>
</template>

<script>
import {API} from '@/common/api'
export default {
  name: 'HelloWorld',
  data () {
    return {
      query: '',
      results: undefined
    }
  },
  methods: {
    getBooks () {
      API.get('', {
        params: {
            q: this.query
        }
      })
      .then(response => {
        this.results = response.data
      })
      .catch(error => {
        this.errors.push(error)
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}


a {
  color: #42b983;
}
</style>