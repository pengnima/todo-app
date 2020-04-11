<template>
  <div class="home">
    <div class="home_navbar">
      <nav-bar right_icon="search"></nav-bar>
    </div>
    <div class="home_avatar">
      <avatar />
    </div>
    <div class="home_todo_list" @click="handleClick">
      <todo-list></todo-list>
    </div>
    <div class="home_detail">
      <todo-detail :isShow="isShow"></todo-detail>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Avatar from "../components/home/Avatar";
import TodoList from "../components/todo/TodoList";
import TodoDetail from "../components/todo/TodoDetail";

import { mapState, mapMutations } from "vuex";
export default {
  components: {
    NavBar,
    Avatar,
    TodoList,
    TodoDetail
  },
  computed: {
    ...mapState(["todos"])
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    ...mapMutations(["changeSelected"]),
    handleClick() {
      this.isShow = !this.isShow;
      this.changeSelected(this.todos[1]);
      console.log("可以");
    }
  }
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100%;
  background-image: linear-gradient(45deg, #e00000, #ffaf37);
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  overflow: hidden;
}
.home_task {
  display: flex;

  transform: translate3d(-20px, 0, 0);

  background: chartreuse;
}
</style>
