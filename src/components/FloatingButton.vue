<template>
  <transition name="grow">
    <button class="floating_button"></button>
  </transition>
</template>

<script>
export default {};
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
</style>