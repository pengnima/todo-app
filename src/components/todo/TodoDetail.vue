<template>
  <!--  @enter="handleEnter" @leave="handleLeave" -->
  <transition name="fade">
    <div class="todo_detail" v-if="isShow">
      <!-- 导航栏 -->
      <nav-bar @leftClick="cancleClick" left_icon="chevron-left" title=" " :isBlack="true" />
      <!-- 简介 和 任务 -->
      <todo :todo="selectedTodo" />
    </div>
  </transition>
</template>

<script>
// selectedTodo 当前todo
import NavBar from "../NavBar";

import Todo from "./Todo";
import { mapState, mapMutations } from "vuex";
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
    Todo
  },
  methods: {
    ...mapMutations(["changeSelected"]),
    cancleClick() {
      this.changeSelected(null);
      this.$parent.showChange();
    }
  }
};
</script>

<style>
.todo_detail {
  position: absolute;
  width: 100%;
  height: 100%;
  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0; */

  background-color: whitesmoke;

  display: flex;
  flex-direction: column;
  /* overflow: auto; */
}

.fade-enter,
.fade-leave-to {
  transform: translate3d(0, 300px, 0);
  opacity: 0.8;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
</style>
