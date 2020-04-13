<template>
  <transition name="edit_up">
    <div class="todo_editing" v-if="isEditing">
      <nav-bar title="新建任务" left_icon="times" :isBlack="true" @leftClick="timesClick" />
      <div class="edit_content">
        <div class="content_tips">
          <p>简单输入您的计划？(16字内)</p>
        </div>
        <textarea v-model="taskContent" maxlength="16"></textarea>
        <div class="choose_date">
          <i class="fa fa-calendar"></i>
          <div class="sel_wrap">
            <input type="text" class="selector" :value="selectValue" disabled />
            <div class="options" @click="optClick">
              <div class="mask">
                <a href="javascript:;">今天</a>
                <a href="javascript:;">明天</a>
              </div>
            </div>
          </div>
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
      taskContent: "",
      selectValue: "今天"
    };
  },
  components: {
    NavBar
  },
  methods: {
    ...mapMutations(["changeEdit", "increaseTask"]),
    timesClick() {
      this.taskContent = "";
      this.selectValue = "今天";
      this.changeEdit(false);
    },
    optClick(e) {
      this.selectValue = e.target.innerText;
    },
    addTask() {
      let payload = {
        date: this.selectValue,
        content: this.taskContent
      };
      this.increaseTask(payload);
      this.timesClick();
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
/**
  选择日期====================================
 */
.choose_date {
  padding: 10px 0;
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);

  display: flex;

  align-items: center;
}
.choose_date i {
  margin-right: 20px;
}
.sel_wrap {
  width: 80px;
  height: 40px;
}
.selector {
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
}
.options {
  width: 100%;
  background-color: white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
.options a {
  display: block;
  text-align: center;
  line-height: 40px;
  width: 100%;
  height: 40px;
  color: black;
  text-decoration: none;
}

.options .mask {
  width: 100%;
  height: 0px;
  overflow: hidden;
  transition: height 0.5s;
}
.sel_wrap:hover .options .mask {
  height: 80px;
}

.options a:hover {
  background-color: #aaa;
}

/**
  ====================================选择日期
 */
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