<template>
    <div>
        <div v-for="book in results.items" v-bind:class="bookSummary">
            <img v-bind:src="book.volumeInfo.imageLinks.thumbnail" v-bind:alt="bookSummary.main">
            <br>
            <b>{{book.volumeInfo.description}}</b>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BookSummary',
  data () {
    return {

    }
  },
  props: {
    bookData: Array
  }
}
</script>

<style scoped>
.bookSummary {
  display: inline-block;
  width: 100px;
}
</style>