<template>
  <q-btn @click="handleclick">
    <slot></slot>
    {{ text }}
  </q-btn>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseButton',
  props: {
    text: {
      name: String,
      required: true
    }
  },
  setup(props) {
    // Define the component's logic here
    function handleClick() {
      console.log("Button clicked");
    }
    return {
      handleClick
    }
  }
})
</script>