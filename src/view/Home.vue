<template>
  <div class="home">
    <div class="home_navbar">
      <nav-bar right_icon="search" />
    </div>
    <div class="home_avatar">
      <avatar />
    </div>
    <div class="home_todo_list">
      <todo-list />
      <!-- 左右箭头调整 todo位置 -->
      <div class="toLeft" @click="prevTodo">
        <i class="fa fa-arrow-left"></i>
      </div>
      <div class="toRight" @click="nextTodo">
        <i class="fa fa-arrow-right"></i>
      </div>
      <!--  -->
    </div>
    <todo-detail :isShow="isShow" />
    <todo-editing />
    <floating-button />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Avatar from "../components/home/Avatar";
import TodoList from "../components/todo/TodoList";
import TodoDetail from "../components/todo/TodoDetail";
import TodoEditing from "../components/todo/TodoEditing";
import FloatingButton from "../components/FloatingButton";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    NavBar,
    Avatar,
    TodoList,
    TodoDetail,
    TodoEditing,
    FloatingButton
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
    ...mapMutations(["changeSelected", "prevTodo", "nextTodo"]),
    showChange() {
      this.isShow = !this.isShow;
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
.home_todo_list {
  position: relative;
}

.home_todo_list .toLeft,
.home_todo_list .toRight {
  opacity: 0;
  font-size: 40px;
  color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 20%;

  width: 50px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  background-color: rgba(0, 0, 0, 0.5);

  transition: all 0.5s;
}
.home_todo_list .toLeft:hover,
.home_todo_list .toRight:hover {
  opacity: 1;
}
.home_todo_list .toLeft {
  border-radius: 0 10px 10px 0;
}
.home_todo_list .toRight {
  right: 0;
  border-radius: 10px 0 0 10px;
}
</style>
