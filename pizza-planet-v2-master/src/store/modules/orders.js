import { firestoreAction } from "vuexfire";
import { dbOrdersRef } from "../../firebase";

const state = {
  orders: [],
};

// REMOVE AFTER ADDING ACTION BELOW
const mutations = {
  // addOrder: (state, order) => state.orders.push(order),
};

const getters = {
  getOrders: (state) => state.orders,
  numberOfOrders: (state) => state.orders.length,
};

const actions = {
  setOrdersRef: firestoreAction((context) => {
    return context.bindFirestoreRef("orders", dbOrdersRef.orderBy("createdAt"));
  }),
  addNewOrder: async (context, order) => {
    try {
      await dbOrdersRef.add(order);
    } catch (error) {
      alert(
        `Sorry, there was a problem placing your order, please try again...`
      );
    }
  },
  removeOrder: async ({ commit }, id) => {
    try {
      const order = await dbOrdersRef.doc(id);
      order.delete();
    } catch (error) {
      alert(`Sorry, there was a problem removing the order, ${error}`);
    }
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
