// import { boot } from 'quasar/wrappers'

// // "async" is optional;
// // more info on params: https://v2.quasar.dev/quasar-cli/boot-files

// const requireComponent = require.context(
//   //base components filename regex
//   'component/base-components',
//   false,
//   /Base[\w]+\.vue$/
// )
// export default boot (async({ Vue }) => {
//   const requireComponent = require.context('components', false, /Base[\w]+\.vue$/) // require the base components in the components directory.

//   requireComponent.keys().forEach(fileName => {
//     const componentConfig = requireComponent(fileName)
//     const componentName = fileName.replace(/^\.\//, '').replace(/\.vue/, '')

//     Vue.component(componentName, componentConfig.default || componentConfig) // register globally the base components in the Vue instance
//   })
// })