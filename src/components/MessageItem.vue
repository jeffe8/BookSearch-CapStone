<template>
  <transition name="fade" appear tag="div">
    <li v-bind:class="[message.type, 'message']" v-show="showMessage">
      {{ message.text }}
      <button v-on:click="close">close</button>
    </li>
  </transition>
</template>

<script>
require('vue2-animate/dist/vue2-animate.min.css');
// Each Message Item expects a `message` object.
// Each message should have the following properties:
// message.type - A string indicating the type. Either "info", "success", or "error"
// message.text - The text of the message. Text only, no HTML formatting.

export default {
  name: 'MessageContainer',
  props: {
    message: Object
  },
  data () {
    return {
      showMessage: true
    }
  },
  methods: {
    close: function () {
      this.showMessage = false;
    }
  },
  created () {
    setTimeout(this.close, 5000);
  }
}
</script>

<style scoped>
.message {
  margin: 5px auto;
  padding: 5px;
  font-size: 1rem;
  width: 60%;
}
.error {
  background: pink;
  color: red;
}
.success {
  background: green;
  color: white;
}
.info {
  background: blue;
  color: white;
}
</style>