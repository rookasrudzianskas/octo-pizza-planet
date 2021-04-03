<template>
  <form>
    <h3>Add new pizza:</h3>
    <div class="form_group">
      <label>Name</label>
      <input type="text" id="name" v-model="newPizza.name" />
    </div>

    <div class="form_group">
      <label>Description</label>
      <textarea type="text" rows="5" v-model="newPizza.description"></textarea>
    </div>

    <p>
      <strong>Option 1:</strong>
    </p>
    <div class="form_group">
      <label>Size (")</label>
      <input type="text" v-model="newPizza.options[0].size" />
    </div>

    <div class="form_group">
      <label>Price</label>
      <input type="text" v-model="newPizza.options[0].price" />
    </div>

    <p>
      <strong>Option 2:</strong>
    </p>
    <div class="form_group">
      <label>Size (")</label>
      <input type="text" v-model="newPizza.options[1].size" />
    </div>

    <div class="form_group">
      <label>Price</label>
      <input type="text" v-model="newPizza.options[1].price" />
    </div>

    <button type="button" class="btn_green" @click="add">Add</button>
  </form>
</template>

<script>
import { store } from "../store/store.js";

export default {
  name: "addNewPizza",
  data() {
    return {
      newPizza: {
        name: "Eg. Margherita",
        description:
          "Eg. A delicious tomato based pizza topped with mozarella, ham and pineapple.",
        options: [
          {
            size: 9,
            price: 6.95
          },
          {
            size: 12,
            price: 12.95
          }
        ]
      }
    };
  },
  methods: {
    add() {
      store.dispatch("addMenuItem", this.newPizza);
    }
  }
};
</script>
<style>
.form_group {
  margin: 10px 0;
}

label {
  display: block;
  margin: 0 0 10px 0;
}

input,
textarea {
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
  background-color: rgb(254, 254, 252);
  border: solid 1px #f79e38;
}

button {
  background-color: rgb(63, 145, 63);
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
}
</style>


