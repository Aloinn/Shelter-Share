<template>
  <q-card class="sign-card row justify-center items-center q-pa-lg">
    <div class="col">
      <div class="text-h6 text-center">Welcome Back!</div>
      <q-img src="../../../assets/DockPerson.jpg" />
    </div>
    <q-separator vertical />

    <div class="col">
      <div class="text-center text-h6">Sign In</div>
      <!-- Google alternative -->
      <q-card-section class="row justify-center">
        <google-button />
        <div class="row fit no-wrap q-gutter-x-sm justify-start items-center">
          <q-separator class="col q-ml-lg" />
          <div class="col-grow text-grey">or</div>
          <q-separator inset class="col" />
        </div>
      </q-card-section>
      <q-card-section class="row justify-center items-center q-mt-md">
        <div class="text-red text-center" v-if="error">*{{ error }}</div>
        <q-form
          class="q-gutter-y-xl column credential-input"
          @submit.prevent="useAuthLogin"
        >
          <q-input v-model="email" label="Email" outlined stack-label />
          <q-input
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            label="Password"
            outlined
            stack-label
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-btn
            label="Sign In"
            type="submit"
            @click="useAuthLogin"
            color="primary"
          />
        </q-form>
      </q-card-section>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import GoogleButton from '../GoogleButton.vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
export default defineComponent({
  components: {
    GoogleButton,
  },
  setup() {
    // Credential vars
    const email = ref('');
    const password = ref('');
    const isPwd = ref(true);
    const error = ref('');
    // Router
    const $route = useRouter();
    async function useAuthLogin() {
      const auth = getAuth();
      const res = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      // If creation successful navigate to dashboard
      if (res.user) {
        $route.push('/dashboard');
      } else {
        error.value = 'Wrong password, please try again';
      }
    }
    return {
      // Primitives
      email,
      password,
      isPwd,
      //Functions
      useAuthLogin,
    };
  },
});
</script>

<style lang="scss" scoped>
.sign-card {
  min-width: 70vw;
}
</style>
