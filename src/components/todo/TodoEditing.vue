<template>
  <transition name="edit_up">
    <div class="todo_editing" v-if="isEditing">
      <nav-bar
        title="新建任务"
        left_icon="times"
        right_icon="ellipsis-v"
        :isBlack="true"
        @leftClick="timesClick"
      />
      <div class="edit_content">
        <div class="content_tips">
          <p>简单输入您的计划？</p>
        </div>
        <textarea v-model="taskContent"></textarea>
        <div class="choose_date">
          <i class="fa fa-calendar"></i>
          <select name="date">
            <option value="today">今天</option>
            <option value="tomorrow">明天</option>
          </select>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import NavBar from "../NavBar";
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["isEditing"])
  },
  data() {
    return {
      taskContent: ""
    };
  },
  components: {
    NavBar
  },
  methods: {
    ...mapMutations(["changeEdit"]),
    timesClick() {
      console.log("aaa");
      this.changeEdit(false);
    }
  }
};
</script>

<style>
.todo_editing {
  position: absolute;
  z-index: 20;

  width: 100%;
  height: calc(100% - 44px);
  background-color: #fff;
}
.edit_content {
  padding: 20px;

  font-size: 20px;
  color: #444;
}
.content_tips p {
  color: #888;
  font-size: 18px;
}
textarea {
  font-size: 32px;
  width: 100%;
  height: 150px;

  border: none;
  resize: none;
  outline: none;

  margin: 8px 0 30px 0;
}
.choose_date {
  padding: 10px 0;
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);
}
.edit_up-enter,
.edit_up-leave-to {
  transform: translate3d(0, 200px, 0);
  opacity: 0.8;
}
.edit_up-enter-active,
.edit_up-leave-active {
  transition: all 0.5s;
}
</style>