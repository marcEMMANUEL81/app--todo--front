import { createStore } from "vuex";

export default createStore({
    state: {
        appName: "TODO APP",
        username: "Marc",
        item: [{
                itemName: "Business",
                id: "container",
                quantity: 0,
            },
            {
                itemName: "Personal",
                id: "container2",
                quantity: 0,
            },
        ],
        todo__list: [],
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});