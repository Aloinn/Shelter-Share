<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-icon
          name="menu"
          color="black"
          @click="toggleLeftDrawer"
          size="2rem"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list class="q-gutter-y-md">
        <q-item-label header> Shelter Share </q-item-label>
        <!-- Signed in state -->

        <!-- List of navigation items -->
        <q-item
          v-for="nav in navigationList"
          :key="nav.name"
          :href="nav.route"
          clickable
          v-ripple
        >
          <div class="q-mr-lg">
            <q-icon
              :name="nav.icon"
              size="2rem"
              :color="nav.route == currentRoute ? 'primary' : 'grey'"
            />
          </div>
          <q-item-section>
            <q-item-label
              :class="nav.route == currentRoute ? 'text-black' : 'text-grey'"
              >{{ nav.name }}</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="logout">
          <div class="q-mr-lg">
            <q-icon name="logout" size="2rem" color="red" />
          </div>
          <q-item-section> Sign out </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useFirebaseUser } from '@gcto/firebase-hooks';
export default defineComponent({
  setup() {
    const navigationList = [
      {
        name: 'Overview',
        route: '/dashboard/',
        icon: 'home',
      },
      {
        name: 'Donation History',
        route: '/dashboard/history',
        icon: 'book',
      },
      {
        name: 'Donate',
        route: '/dashboard/form',
        icon: 'request_quote',
      },
      {
        name: 'Settings',
        route: '/dashboard/settings',
        icon: 'settings',
      },
    ];
    const leftDrawerOpen = ref(false);

    const $route = useRoute();
    const currentRoute = $route.path;
    const userObject = useFirebaseUser();
    // Computed to refresh upon undefined validation
    const user = computed(() => userObject.data.value);

    function logout() {
      return 0;
    }
    return {
      // Primitives
      navigationList,
      currentRoute,
      leftDrawerOpen,
      user,
      // Functions
      logout,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss" scoped></style>
