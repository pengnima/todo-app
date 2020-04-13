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
        ],
        colors: ["#ff6262", "#ffa947"]
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
            date: new Date(Date.now() + 86400000),
            isDone: false,
            deleted: false
          }
        ],
        colors: ["#5b9df9", "#47bfcf"]
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
        ],
        colors: ["#2c7d59", "#3ba776"]
      }
    ],
    selectedTodo: null,
    currentIndex: 1,
    isEditing: false,
    gid: 7
  },
  mutations: {
    changeSelected(state, payload) {
      state.selectedTodo = payload;
    },
    changeEdit(state, payload) {
      state.isEditing = payload;
    },
    deleteTask(state, payload) {
      payload.deleted = true;
    },
    increaseTask(state, payload) {
      let task = {
        id: state.gid++,
        content: payload.content,
        date:
          payload.date == "明天" ? new Date(Date.now() + 86400000) : new Date(),
        isDone: false,
        deleted: false
      };
      state.selectedTodo.tasks.push(task);
    },
    prevTodo(state) {
      if (state.currentIndex > 0) {
        state.currentIndex--;
      }
    },
    nextTodo(state) {
      if (state.currentIndex < 2) {
        state.currentIndex++;
      }
    }
  }
});

export default store;
