import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      {
        icon: "user",
        name: "用户",
        tasks: [
          {
            id: 1,
            content: "pengnima",
            date: new Date(),
            isDone: false,
            deleted: false
          }
        ]
      },
      {
        icon: "tasks",
        name: "任务",
        tasks: [
          {
            id: 3,
            content: "学习CSS，HTML",
            date: new Date(),
            isDone: true,
            deleted: false
          },
          {
            id: 4,
            content: "学习JS",
            date: new Date(),
            isDone: false,
            deleted: false
          },
          {
            id: 5,
            content: "学习Node",
            date: new Date(),
            isDone: false,
            deleted: false
          },
          {
            id: 6,
            content: "学习Vue",
            date: new Date(),
            isDone: false,
            deleted: false
          }
        ]
      },
      {
        icon: "home",
        name: "家",
        tasks: [
          {
            id: 2,
            content: "my house",
            date: new Date(),
            isDone: false,
            deleted: false
          }
        ]
      }
    ],
    selectedTodo: null
  },
  mutations: {
    changeSelected(state, payload) {
      state.selectedTodo = payload;
    }
  }
});

export default store;
