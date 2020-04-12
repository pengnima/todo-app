<template>
  <!--  @enter="handleEnter" @leave="handleLeave" -->
  <transition name="fade">
    <div class="todo_detail" v-if="isShow">
      <!-- 导航栏 -->
      <nav-bar
        @leftClick="cancleClick"
        left_icon="chevron-left"
        title=" "
        right_icon="ellipsis-v"
        :isBlack="true"
      />
      <!-- 简介 和 任务 -->
      <todo :todo="selectedTodo" />
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

import Todo from "./Todo";
import FloatingButton from "../FloatingButton";
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
    Todo,
    FloatingButton
  },
  methods: {
    ...mapMutations(["changeSelected"]),
    handleEnter(el) {
      Object.assign(el.style, {
        top: `10px`,
        left: `10ppx`,
        width: `100%`,
        height: `100%`
      });
      setTimeout(() => {
        Object.assign(el.style, {
          top: 0,
          left: 0,
          width: `100%`,
          height: `100%`
        });
      }, 0);
    },
    handleLeave(el) {
      Object.assign(el.style, {
        top: 0,
        left: 0,
        width: "100%",
        height: `100%`
      });
      setTimeout(() => {
        Object.assign(el.style, {
          top: `20px`,
          left: `20px`,
          width: `100%`,
          height: `100%`
        });
      }, 0);
    },
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: whitesmoke;

  display: flex;
  flex-direction: column;
  overflow: auto;
}

.fade-enter,
.fade-leave-to {
  top: 20px;
  transform: translate3d(0, 200px, 0);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
</style>
