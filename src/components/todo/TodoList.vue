<template>
  <div class="todo_list" :style="{ width: `${todos.length * 100}%` }">
    <div class="todo" v-for="item in todos" :key="item.name">
      <todo :todo="item" />
    </div>
  </div>
</template>

<script>
import Todo from "../todo/Todo";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["todos"])
  },
  components: {
    Todo
  }
};
</script>

<style>
.todo_list {
  display: flex;
}
.todo {
  margin: 20px 0 0 30px;
  background-color: #eee;
  width: 25%;
  height: 320px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  /* transform: translate3d(-100px, 0, 0); */
}
</style>
