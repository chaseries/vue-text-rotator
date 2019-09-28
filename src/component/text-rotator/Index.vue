<template>
  <div class="text-rotator">
    <div :class="classPrevious">
      {{ previous }}
    </div>
    <div :class="classCurrent">
      {{ content }}
    </div>
  </div>
</template>

<script>

export default {
  name: "text-rotator",
  props: {
    content: {
      type: String,
      required: true
    },
    reverse: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      previous: "",
      colorFlag: true
    };
  },
  watch: {
    content (c, l) {
      this.colorFlag = !this.colorFlag;
    }
  },
  computed: {
    classPrevious () {
      return {
        "previous": true,
        "previous--forwards--black": !this.reverse && this.colorFlag,
        "previous--forwards--white": !this.reverse && !this.colorFlag,
        "previous--reverse--black": this.reverse && this.colorFlag,
        "previous--reverse--white": this.reverse && !this.colorFlag
      };
    },
    classCurrent () {
      return {
        "current--forwards--black": !this.reverse && this.colorFlag,
        "current--forwards--white": !this.reverse && !this.colorFlag,
        "current--reverse--black": this.reverse && this.colorFlag,
        "current--reverse--white": this.reverse && !this.colorFlag
      };
    }
  }
};
</script>

<style lang="sass">

@mixin top-to-center
  transform: translateY(-100%)
  animation: upwards 0.5s linear forwards reverse

@mixin bottom-to-center
  transform: translateY(100%)
  animation: downwards 0.5s linear forwards reverse

@mixin center-to-top
  animation: upwards 0.5s linear forwards normal

@mixin center-to-bottom
  animation: downwards 0.5s linear forwards normal

.text-rotator
  position: relative
  overflow: hidden

.previous
  position: absolute
  top: 0
  left: 0

.previous--reverse
  @include center-to-top

.previous--forwards
  &--white
    @include center-to-bottom
  &--black
    @include center-to-bottom

.current--reverse
  @include bottom-to-center

.current--forwards
  &--white
    @include top-to-center
  &--black
    @include top-to-center

@keyframes upwards
  0%
    transform: translateY(0)
  100%
    transform: translateY(-100%)

@keyframes downwards
  0%
    transform: translateY(0)
  100%
    transform: translateY(100%)

</style>
