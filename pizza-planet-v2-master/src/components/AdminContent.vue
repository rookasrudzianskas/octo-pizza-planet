<template>
  <section>
    <div class="current_user_wrapper">
      <span>Logged in as:</span>
      {{currentUser}}
      <button type="button" class="btn_red" @click.prevent="signOut">Sign out</button>
    </div>
    <NewPizza />
    <div class="menu_wrapper">
      <h3>Menu:</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Remove from menu</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.id">
          <tr>
            <td>{{ item.name }}</td>
            <td>
              <button type="button" class="btn_red" @click="removeMenuItem(item.id)">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="orders_wrapper">
      <h3>Current orders ({{ numberOfOrders }}):</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody v-for="(order, index) in getOrders" :key="order.id">
          <tr class="order_number">
            <th colspan="4">
              <strong>Order Number: {{ index + 1 }}</strong>
              <button type="button" class="btn_red" @click="removeOrder(order.id)">x</button>
            </th>
          </tr>
          <tr v-for="orderItem in order.pizzas" :key="orderItem.id">
            <td>{{ orderItem.name }}</td>
            <td>{{ orderItem.size }} "</td>
            <td>{{ orderItem.quantity }}</td>
            <td>{{ orderItem.price | currency }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import NewPizza from "./NewPizza.vue";
import { store } from "../store/store.js";
import { mapGetters } from "vuex";

export default {
  name: "adminContent",
  components: {
    NewPizza
  },
  computed: {
    ...mapGetters([
      "getOrders",
      "getMenuItems",
      "numberOfOrders",
      "currentUser"
    ])
  },
  methods: {
    removeMenuItem(id) {
      store.dispatch("removeMenuItem", id);
    },
    removeOrder(id) {
      store.dispatch("removeOrder", id);
    },
    signOut() {
      store.dispatch("signOut");
    }
  },
  beforeRouteLeave: (to, from, next) => {
    if (confirm("You will be logged out when leaving admin?") == true) {
      store.dispatch("signOut");
      next();
    } else {
      next(false);
    }
  }
};
</script>
<style>
.current_user_wrapper,
.orders_wrapper,
.menu_wrapper {
  margin: 10px 0;
  padding: 10px;
  border: solid 1px #f79e38;
  background: rgb(254, 254, 252);
}

table {
  text-align: left;
  width: 70vw;
}

.order_number th {
  background: #ddd;
}

.order_number button {
  margin: 0 10px;
}
</style>