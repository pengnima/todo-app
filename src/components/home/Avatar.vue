<template>
  <div class="avatar">
    <div class="head">
      <img src="../../assets/dark.jpg" alt />
    </div>
    <div class="content">
      <h2>你好，{{todos[0].tasks[0].content}}</h2>
      <p>今天天气不错</p>
      <p>您有 {{totalTask}} 个任务需要完成</p>
    </div>
    <div class="date">日期：{{new Date()|dateFormat}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["todos"]),
    totalTask() {
      let totalCount = this.todos.reduce((total, todo) => {
        return (
          total +
          todo.tasks.filter(task => {
            return !task.isDone && !task.deleted;
          }).length
        );
      }, 0);
      return totalCount;
    }
  },
  filters: {
    dateFormat(date) {
      return date.toLocaleDateString();
    }
  }
};
</script>

<style scoped>
.avatar {
  height: 250px;
  padding: 30px 30px 0px 30px;

  /* letter-spacing: 2px; */
  color: white;
}
.head img {
  width: 60px;
  height: 60px;
  border-radius: 50%;

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
}
.content {
  margin: 20px 0;
}
.content h2 {
  font-weight: 400;
  margin-bottom: 20px;
}
.content p {
  font-size: 14px;
}
</style>