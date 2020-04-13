<template>
  <div class="todo" :class="{todo__no__selected:selectedTodo==null}">
    <!-- 简介 -->
    <div class="profile">
      <div class="icon">
        <i :class="['fa',`fa-${todo.icon}`]" :style="{color:`${todo.colors[0]}`}"></i>
      </div>
      <p>{{totalCount}} 条任务</p>
      <h1>{{todo.name}}</h1>
      <div class="progress">
        <span
          class="progress_line"
          :style="{width:`${progress}`,backgroundColor:`${todo.colors[0]}`}"
        ></span>
      </div>
      <span style="font-size:12px;">{{progress}}</span>
    </div>
    <!-- 今天,明天 的任务-->
    <div class="tasks" v-if="selectedTodo!=null">
      <div class="today">
        <p style="letter-spacing:15px">今天</p>
        <task v-for="item in todayTasks" :key="item.id" :task="item" />
      </div>
      <div class="tomorrow">
        <p style="letter-spacing:15px">明天</p>
        <task v-for="item in tomorrowTasks" :key="item.id" :task="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Task from "../task/Task";
import { mapState } from "vuex";
import { tomorrow } from "../../common/shared";
export default {
  props: {
    todo: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      tomorrow
    };
  },
  computed: {
    ...mapState(["selectedTodo"]),
    todayTasks() {
      return this.todo.tasks.filter(task => {
        return task.date < tomorrow;
      });
    },
    tomorrowTasks() {
      return this.todo.tasks.filter(task => {
        return task.date > tomorrow;
      });
    },
    totalCount() {
      return this.todo.tasks.filter(task => {
        return task.deleted == false;
      }).length;
    },
    progress() {
      let doneCount = this.todo.tasks.filter(task => {
        return task.isDone == true && task.deleted == false;
      }).length;
      if (this.totalCount == 0) {
        return "0%";
      }
      return Math.floor((doneCount / this.totalCount) * 100) + "%";
    }
  },
  components: {
    Task
  }
};
</script>

<style scoped>
.todo {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
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

  height: 100%;
  border-radius: 4px;

  transition: all 0.5s;
}

.tasks {
  flex: 1;
  padding: 0 10% 10% 10%;
  color: #666;
  overflow-y: auto;
}
.tasks > div {
  margin-bottom: 32px;
}
</style>