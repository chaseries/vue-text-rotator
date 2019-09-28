<template>
  <div>
    <text-rotator :content="values[idx]"></text-rotator>
    <br><br><br><br><br><br>
    <button @click="prev">Previous</button>
    <button @click="next">Next</button>
  </div>
</template>

<script>
import TextRotator from "VUE_COMPONENT/text-rotator/Index.vue";
import { circularPrev, circularNext } from "SRC/util/array";

const values = [
  "One text item",
  "Second text item",
  "Text item three"
];


export default {
  name: "page-index",
  components: {
    TextRotator
  },
  data () {
    return {
      idx: 0,
      values: values
    };
  },
  methods: {
    prev () {
      this.idx = circularPrev(this.idx, values);
    },
    next () {
      this.idx = circularNext(this.idx, values);
    }
  }
};
</script>
