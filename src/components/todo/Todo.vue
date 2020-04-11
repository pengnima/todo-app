<template>
  <div class="profile">
    <div class="icon">
      <i :class="['fa',`fa-${todo.icon}`]"></i>
    </div>
    <p>{{todo.tasks.length}} 条任务</p>
    <h1>{{todo.name}}</h1>
    <div class="progress">
      <span class="progress_line"></span>
    </div>
    <span style="font-size:13px;">80%</span>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      default: null
    }
  }
};
</script>

<style scoped>
.profile {
  padding: 10%;
}
.profile > .icon {
  font-size: 18px;
  display: inline-block;
  justify-content: center;
  align-items: center;

  color: #0066ff;
  padding: 7px 10px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.profile > p {
  margin-top: 20px;
}
.profile > h1 {
  font-weight: 400;
  margin: 10px 0 30px 0;
}
.progress {
  display: inline-block;
  position: relative;
  width: 85%;
  height: 4px;
  border-radius: 4px;
  background-color: #ddd;
  margin-right: 8px;

  vertical-align: middle; /* 对齐字体的中间 */
}
.progress_line {
  display: inline-block;
  position: absolute;

  width: 80%;
  height: 100%;
  border-radius: 4px;
  background-color: rgb(0, 174, 255);
}
</style>