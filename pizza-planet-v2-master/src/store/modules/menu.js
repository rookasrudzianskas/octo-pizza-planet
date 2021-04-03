import { firestoreAction } from "vuexfire";
import { dbMenuRef } from "../../firebase";

const state = {
  menuItems: [],
};

const getters = {
  getMenuItems: (state) => state.menuItems,
};

const mutations = {};

const actions = {
  setMenuRef: firestoreAction((context) => {
    return context.bindFirestoreRef("menuItems", dbMenuRef);
  }),
  addMenuItem: async ({ commit }, pizza) => {
    // dont need to also commit a mutation since we dont need to update our own store
    // vuexfire handles syncing our store with firebase for us
    try {
      await dbMenuRef.add(pizza);
    } catch (error) {
      alert(`Error creating new pizza, ${error}`);
    }
  },
  removeMenuItem: async ({ commit }, id) => {
    try {
      const item = await dbMenuRef.doc(id);
      item.delete();
    } catch (error) {
      alert(`Error removing menu item, ${error}`);
    }
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
