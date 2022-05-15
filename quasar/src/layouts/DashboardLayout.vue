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
        <q-item-label header>
          <q-btn icon="handshake" to="/" flat />
        </q-item-label>
        <!-- Signed in state -->
        <q-card class="q-mx-md" v-if="user">
          <q-card-section class="row items-center q-gutter-x-md">
            <q-img
              class="col-2"
              :src="
                user?.photoURL ||
                'https://icon-library.com/images/anonymous-person-icon/anonymous-person-icon-18.jpg'
              "
            />
            <div class="text-bold col-8">
              {{ user?.email || user?.displayName }}
              <div class="text-caption text-grey">Donor</div>
            </div>
          </q-card-section>
        </q-card>
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
        <q-item class="q-mt-xl" clickable v-ripple @click="logout" v-if="user">
          <div class="q-mr-lg">
            <q-icon name="logout" size="2rem" color="red" />
          </div>
          <q-item-section> Sign out </q-item-section>
        </q-item>
        <q-item
          class="q-mt-xl"
          clickable
          v-ripple
          @click="showLogin = true"
          v-else
        >
          <div class="q-mr-lg">
            <q-icon name="login" size="2rem" color="primary" />
          </div>
          <q-item-section>Login</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-dialog v-model="showLogin">
      <login-dialog @close="closeAll" />
    </q-dialog>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getAuth, signOut } from 'firebase/auth';
import LoginDialog from 'src/components/auth/modals/LoginDialog.vue';
import { useFirebaseUser } from 'src/boot/firebase';
export default defineComponent({
  components: { LoginDialog },
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
        route: '/dashboard/donate',
        icon: 'request_quote',
      },
      {
        name: 'Settings',
        route: '/dashboard/settings',
        icon: 'settings',
      },
    ];
    const leftDrawerOpen = ref(false);
    const showLogin = ref(false);
    const $route = useRoute();
    const $router = useRouter();
    const currentRoute = $route.path;
    const userObject = useFirebaseUser();
    // Computed to refresh upon undefined validation
    const user = computed(() => userObject.data.value);
    function closeAll() {
      showLogin.value = false;
    }
    async function logout() {
      const auth = getAuth();
      await signOut(auth);
      $router.push('/');
    }
    return {
      // Primitives
      navigationList,
      currentRoute,
      leftDrawerOpen,
      user,
      showLogin,
      userObject,
      // Functions
      closeAll,
      logout,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss" scoped></style>
