<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <div class="info_block_wrapper">
      <router-view name="ordering-guide"></router-view>
      <router-view name="delivery"></router-view>
      <router-view name="history"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { dbMenuRef, dbOrdersRef } from "./firebase";

export default {
  name: "app",
  components: {
    // should not use reserved header element name
    appHeader: Header
  },
  created() {
    this.$store.dispatch("setMenuRef", dbMenuRef);
    this.$store.dispatch("setOrdersRef", dbOrdersRef);
  }
};
</script>

<style>
body {
  font-family: "Crimson Text", serif;
  margin: 0;
  font-size: 1.5em;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 10px 0;
  background: #f1e6da;
}

li {
  list-style: none;
}

span {
  margin: 0 5px;
}

input,
textarea {
  font-size: 1.1rem;
}

button {
  border: none;
  font-size: 1.1rem;
}

.btn_green {
  background: rgb(101, 168, 101);
}

.btn_red {
  background: rgb(241, 70, 70);
}

.info_block_wrapper {
  display: flex;
  flex-direction: column;
}

.info_block {
  background: #f1e6da;
  margin: 10px 0;
  padding: 10px;
}

.info_block > h3 {
  text-align: center;
}

.info_block_content {
  display: flex;
  align-items: center;
}

.info_block img {
  width: 30%;
}

@media screen and (min-width: 900px) {
  .info_block {
    width: 100%;
  }

  .info_block_wrapper {
    flex-direction: row;
    justify-content: space-around;
    /* align-items: center; */
    align-content: space-between;
  }

  .info_block:nth-child(2) {
    margin: 10px;
  }

  .info_block:nth-child(2) img {
    /* middle info block has image second in source order on small screens
    this will move the image back on top of text for large screens */
    order: -1;
  }

  .info_block_content {
    flex-direction: column;
    align-items: center;
  }

  .info_block img {
    max-width: 100%;
  }
}
</style>
