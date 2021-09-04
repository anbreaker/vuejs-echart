<template>
  <div id="app">
    <Pie />
  </div>
</template>

<script>
  import Pie from './components/Pie.vue';

  export default {
    name: 'App',

    components: {
      Pie,
    },
  };
</script>

<style>
  body {
    background-color: #100c2a;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
