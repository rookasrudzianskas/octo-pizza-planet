<template>
  <div id="app">
      <app-header/>
    <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header';
// import Home from './components/Home';
// import Admin from './components/Admin'
export default {
  name: 'App',
  components: {
    appHeader: Header,
    // Home,
    // Admin,
  }
};
</script>

<style>

</style>
