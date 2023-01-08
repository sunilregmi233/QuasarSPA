<template>
  <q-btn 
    class="button"
    @click="handleClick" 
    :to="route"
    :text-color="textColor"
    :label="label"
    :size="size"
    :color="color"
  >
    <slot></slot>
  </q-btn>
  
</template>

<script>
// import { F } from 'app/src-cordova/platforms/android/app/build/intermediates/merged_assets/debug/out/www/assets/index.00922730';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseButton',
  props: {
    label: { name: String, required: true, default: "Button" },
    route: { type: String, required: false },
    textColor: { type: String, required: false },
    size: { type: String, required: false },
    color: { type: String, required: false },


  },
  setup() {
    // Define the component's logic here
    function handleClick() {
      console.log("Button clicked");

    }
    
    return {
      handleClick,
    }
  }
})
</script>


<style>
.button {
  padding: 5px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
</style>