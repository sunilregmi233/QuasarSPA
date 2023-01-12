<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        
          <q-toolbar-title>
            Genius App
          </q-toolbar-title>
            <div>
              <h5 v-if="userStore.is_login === false">Welcome </h5>
              <h5 v-if="userStore.is_login === true">Hi, {{ userStore.user }}</h5>

            </div>
          
            <BaseButton label="Login" v-if="userStore.is_login === false" route="/login"></BaseButton>
            <BaseButton label="Logout" v-if="userStore.is_login === true" @click="logout"></BaseButton>
            <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />

        

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      overlay behavior="mobile" 

    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-drawer 
      show-if-above
      v-model="rightDrawerOpen" 
      side="right" 
      overlay behavior="mobile" 
      bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { storeToRefs } from 'pinia'
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useUserStore } from '../stores/user/user';



const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  setup () {
    const userStore = useUserStore();
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      rightDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
      userStore,
      
    }
  },
  methods: {
    async logout() {
      await this.userStore.signOut();
      this.$router.push('/');
      
    }
  },
})
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 360px) {
  .title {
  color: red;
  left: 8rem;
}

}
</style>