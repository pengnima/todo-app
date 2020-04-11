<template>
  <transition name="fade">
    <div class="todo_detail" v-if="isShow">
      <!-- 导航栏 -->
      <nav-bar left_icon="chevron-left" title=" " right_icon="ellipsis-v" :isBlack="true" />
      <!-- 简介 -->
      <todo :todo="selectedTodo" />
      <!-- 今天,明天 的任务-->
      <div class="tasks">
        <div class="today">
          <p style="letter-spacing:15px">今天</p>
          <task :task="selectedTodo.tasks[0]" />
          <task :task="selectedTodo.tasks[1]" />
        </div>
        <div class="tomorrow">
          <p style="letter-spacing:15px">明天</p>
          <task :task="selectedTodo.tasks[2]" />
          <task :task="selectedTodo.tasks[3]" />
        </div>
      </div>
      <!-- 添加任务 -->
      <div class="add_icon">
        <floating-button></floating-button>
      </div>
    </div>
  </transition>
</template>

<script>
// selectedTodo 当前todo
import NavBar from "../NavBar";
import Task from "../task/Task";
import Todo from "./Todo";
import FloatingButton from "../FloatingButton";
import { mapState } from "vuex";
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState(["selectedTodo"])
  },
  components: {
    NavBar,
    Task,
    Todo,
    FloatingButton
  }
};
</script>

<style scoped>
.todo_detail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: whitesmoke;

  display: flex;
  flex-direction: column;
  overflow: auto;
}

.tasks {
  flex: 1;
  padding: 0 10% 10% 10%;
  color: #666;

  overflow: auto;
}
.tasks > div {
  margin-bottom: 32px;
}

.fade-enter,
.fade-leave-to {
  transform: translate3d(0, 200px, 0) scale(0.5);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
</style>
