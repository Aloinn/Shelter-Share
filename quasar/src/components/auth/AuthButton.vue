<template>
  <div class="row">
    <q-btn label="Sign up" @click="showDialog('sign')" flat />
    <q-btn label="Log in" @click="showDialog('log')" flat />
    <q-dialog v-model="showSignup">
      <signup-dialog />
    </q-dialog>
    <q-dialog v-model="showSignup">
      <signup-dialog @close="closeAll" />
    </q-dialog>
    <q-dialog v-model="showLogin">
      <login-dialog @close="closeAll" />
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// Components
import SignupDialog from './modals/SignupDialog.vue';
import LoginDialog from './modals/LoginDialog.vue';
export default defineComponent({
  components: {
    SignupDialog,
    LoginDialog,
  },
  setup() {
    const showLogin = ref(false);
    const showSignup = ref(false);

    // Using polar assertion just to prevent weird dialog interactions
    function showDialog(authChoice: string) {
      if (authChoice == 'sign') {
        showSignup.value = true;
        showLogin.value = false;
      } else {
        showSignup.value = false;
        showLogin.value = true;
      }
    }
    function closeAll() {
      showSignup.value = false;
      showLogin.value = false;
    }
    return {
      // Primitives
      showLogin,
      showSignup,
      // Functions
      showDialog,
      closeAll,
    };
  },
});
</script>
