<template>
  <test-component />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/default">default</router-link> |
    <router-link to="/sample">Sample</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
