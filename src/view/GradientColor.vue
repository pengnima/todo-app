<template>
  <!-- 颜色无法做到过渡transition，那么就利用 opacity来模拟，让3种颜色叠加一起，改变透明度做到过渡 -->
  <div class="gradient">
    <div
      class="gradient_color"
      v-for="(item,index) in todos"
      :key="item.name"
      :class="{color_active:index == currentIndex}"
      :style="{backgroundImage:backColor(index)}"
    ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["todos", "currentIndex"])
  },
  methods: {
    backColor(index) {
      return `linear-gradient(45deg,${this.todos[index].colors[0]}, ${this.todos[index].colors[1]})`;
    }
  }
};
</script>

<style>
.gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
}
.gradient_color {
  position: absolute;
  width: 100%;
  height: 100%;

  transition: opacity 0.5s;
  opacity: 0;
}
.color_active {
  opacity: 1;
}
</style>