<template>
  <transition name="button_up" v-if="selectedTodo!=null">
    <button class="floating_button" :class="{edit__button:isEditing}" @click="buttonClick" />
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["selectedTodo", "isEditing"])
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["changeEdit"]),
    buttonClick() {
      if (!this.isEditing) {
        this.changeEdit(true);
      } else {
        this.$emit("editClick");
      }
    }
  }
};
</script>

<style>
.floating_button {
  position: absolute;
  bottom: 32px;
  right: 32px;

  width: 44px;
  height: 44px;
  border-radius: 50%;

  outline: none;
  border: none;
  background-image: linear-gradient(45deg, rgb(0, 100, 255), rgb(0, 190, 255));
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);

  transition: all 0.5s;
}
.edit__button.floating_button {
  border-radius: 0px;
  width: 100%;
  height: 44px;
  bottom: 0px;
  right: 0px;
}
.floating_button::before,
.floating_button::after {
  content: "";
  position: absolute;

  width: 24px;
  height: 3px;
  left: 50%;
  top: 50%;
  background-color: white;
  border-radius: 3px;
}
.floating_button::before {
  transform: translate3d(-50%, -50%, 0);
}
.floating_button::after {
  transform: translate3d(-50%, -50%, 0) rotate(90deg);
}

.button_up-enter,
.button_up-leave-to {
  transform: translate3d(0, 100px, 0);
}
.button_up-enter-active,
.button_up-leave-active {
  transition: all 0.5s;
}
</style>