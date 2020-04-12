<template>
  <div :class="{navbar:true ,isblack:isBlack}">
    <div class="left" @click="leftClick">
      <i :class="['fa',`fa-${left_icon}`]"></i>
    </div>
    <div class="center">
      <span>{{title}}</span>
    </div>
    <div class="right">
      <i :class="['fa',`fa-${right_icon}`]"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "TODO"
    },
    left_icon: {
      type: String,
      default: "reorder"
    },
    right_icon: {
      type: String,
      default: "remove"
    },
    isBlack: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    leftClick() {
      this.$emit("leftClick");
    }
  }
};
</script>

<style scoped>
.navbar {
  height: 44px;
  line-height: 40px;
  text-align: center;

  display: flex;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  font-weight: bold;
  color: white;
}
.isblack {
  color: black;
}
.left {
  width: 20%;
}
.center {
  flex: 1;
}
.right {
  width: 20%;
}
</style>