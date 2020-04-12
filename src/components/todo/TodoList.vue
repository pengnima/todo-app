<template>
  <div class="todo_list" :style="{ width: `${todos.length * 100}%` }">
    <div
      class="list__todo"
      v-for="item in todos"
      :key="item.name"
      :style="{transform: `translate3d(-${currentIndex*100}%,0,0)`}"
      @click="todoClick(item)"
    >
      <todo :todo="item" />
    </div>
  </div>
</template>

<script>
import Todo from "../todo/Todo";
import { mapState, mapMutations } from "vuex";
export default {
  mounted() {
    let touch = {};
    this.$el.addEventListener("touchstart", evt => {
      touch.startX = evt.touches[0].clientX;
      touch.endX = 0;
    });
    this.$el.addEventListener("touchmove", evt => {
      touch.endX = evt.touches[0].clientX;
    });
    this.$el.addEventListener("touchend", () => {
      if (!touch.endX || Math.abs(touch.endX - touch.startX) < 10) {
        return;
      }
      if (touch.endX < touch.startX) {
        this.nextTodo();
      } else {
        this.prevTodo();
      }
    });
  },
  computed: {
    ...mapState(["todos", "currentIndex"])
  },
  components: {
    Todo
  },
  methods: {
    ...mapMutations(["nextTodo", "prevTodo", "changeSelected"]),
    todoClick(item) {
      this.changeSelected(item);
      this.$parent.showChange();
    }
  }
};
</script>

<style>
.todo_list {
  display: flex;
  margin-top: 20px;
}
.list__todo {
  margin-left: 15px;
  background-color: #eee;
  width: 25%;
  height: 320px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  transition: all 0.5s;
}
</style>
