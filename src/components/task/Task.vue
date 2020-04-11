<template>
  <div class="task" v-if="task!=null">
    <!-- <i class="fa fa-check-square"></i>
    <i class="fa fa-square"></i>-->
    <input :id="id" type="checkbox" v-model="task.isDone" />
    <label :for="id">{{task.content}}</label>
    <transition name="delete_fade">
      <span class="task_delete" v-show="task.isDone" @click="deleteClick">
        <i class="fa fa-trash"></i>
      </span>
    </transition>
  </div>
</template>

<script>
let GID = 0;
export default {
  props: {
    task: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      id: `task_${++GID}`
    };
  },
  methods: {
    deleteClick() {
      console.log("删除");
    }
  }
};
</script>

<style>
.task {
  display: flex;
  position: relative;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  font-size: 14px;
}
.task input {
  display: none;
}
.task label::before,
.task label::after {
  content: "";
  display: inline-block;
  vertical-align: top;
  width: 10px;
  height: 10px;
  padding: 3px;
  border-radius: 2px;

  margin-right: 16px;
}
.task label::before {
  border: 1px solid #ccc;
}
.task label::after {
  content: "\f00c";
  font: normal normal normal 10px/1 FontAwesome;
  position: absolute;
  left: 0px;
  width: 12px;
  height: 12px;

  display: none;
  z-index: 10;
  color: white;
  background-color: #ccc;
}
.task input:checked + label::after {
  display: inline-block;
}

.task_delete {
  position: absolute;
  right: 0;
  padding: 0 10px; /* 增加了图标的触碰范围 */
  font-size: 16px;
}
/**
  动画




 */
.delete_fade-enter,
.delete_fade-leave-to {
  transform: translate3d(10px, 0, 0);
  opacity: 0;
}
.delete_fade-enter-active,
.delete_fade-leave-active {
  transition: all 0.5s;
}
</style>