import { boot } from 'quasar/wrappers'
import BaseButton from 'components/base-components/BaseButton.vue'


export default boot(async ({ app, router }) => {
  // something to do
  app.component('BaseButton', BaseButton);
})
