<template>
  <q-card
    class="google-btn q-my-md cursor-pointer"
    v-ripple
    @click="useGoogleAuth"
  >
    <q-icon class="q-pa-sm" name="ion-logo-google" size="2rem" />
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
export default defineComponent({
  setup() {
    const provider = new GoogleAuthProvider();
    async function useGoogleAuth() {
      const auth = getAuth();

      const res = await signInWithPopup(auth, provider);
      console.log(res);
      return 0;
    }
    return {
      useGoogleAuth,
    };
  },
});
</script>

<style lang="scss" scoped>
.google-btn {
  border-radius: 24px;
}
</style>
