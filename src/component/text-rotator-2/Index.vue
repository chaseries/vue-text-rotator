<template>
  <div class="text-rotator-2">
    <div v-if="previous"></div>
    <div class="current">
    </div>
  </div>
</template>

<script>

export default {
  name: "text-rotator-2",
  data () {
    return {
      previous: ""
    };
  },
  props: {

  }
};
</script>
