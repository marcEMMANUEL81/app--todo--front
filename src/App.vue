<template>
  <nav>
    <h1 class="site__title"> {{ appName }} </h1>
    <HelloWorld/>
  </nav>  
</template>

<script>

import { mapState } from 'vuex';

import HelloWorld from './components/HelloWorld.vue';
export default {
  name: "App",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(
      ['appName']
    )
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body
{
  background-color: #f6f6f6;
}

div
{
  padding: 10px;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.site__title
{
  font-weight: 900;
  color: #42b983;
}

nav {
  padding: 10px;
  width: 100%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
