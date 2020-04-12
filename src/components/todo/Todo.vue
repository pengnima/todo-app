<template>
  <div :class="{todo__no__selected:selectedTodo==null}">
    <!-- 简介 -->
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
    <!-- 今天,明天 的任务-->
    <div class="tasks" v-if="selectedTodo!=null">
      <div class="today">
        <p style="letter-spacing:15px">今天</p>

        <task v-for="item in todo.tasks" :key="item.id" :task="item" />
        <!-- <task :task="todo.tasks[1]" /> -->
      </div>
      <div class="tomorrow">
        <p style="letter-spacing:15px">明天</p>
        <!-- <task :task="todo.tasks[2]" />
        <task :task="todo.tasks[3]" />-->
      </div>
    </div>
  </div>
</template>

<script>
import Task from "../task/Task";
import { mapState } from "vuex";
export default {
  props: {
    todo: {
      type: Object,
      default: null
    }
  },
  computed: {
    ...mapState(["selectedTodo"])
  },
  components: {
    Task
  }
};
</script>

<style scoped>
/* 未选择某一个todo */
.todo__no__selected .profile {
  padding: 5%;
}
.todo__no__selected .profile > p {
  margin-top: 100px;
}
/* 

 */
.profile {
  padding: 10%;
}
.profile > .icon {
  position: relative;
  width: 44px;
  height: 44px;

  font-size: 18px;
  display: inline-block;
  justify-content: center;
  align-items: center;

  color: #0066ff;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.icon > i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
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

.tasks {
  flex: 1;
  padding: 0 10% 10% 10%;
  color: #666;

  overflow: auto;
}
.tasks > div {
  margin-bottom: 32px;
}
</style>