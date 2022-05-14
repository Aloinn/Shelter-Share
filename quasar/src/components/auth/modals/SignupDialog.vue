<template>
  <q-card class="sign-card row justify-content items-center q-pa-lg" flat>
    <!-- Left Column -->
    <div class="col space-left">
      <q-card-section class="text-center">
        <div class="text-h6">Let's Get Started!</div>
        <div class="text-caption">
          Create an account to start providing back to the community!
        </div>
        <div class="text-center text-red" v-if="error">*{{ error }}</div>
      </q-card-section>
      <q-card-section class="row justify-center items-center q-mt-md">
        <q-form
          class="q-gutter-y-lg column credential-input"
          @submit.prevent="useEmailAuth"
        >
          <q-input
            v-model="email"
            label="Email"
            name="email"
            outlined
            stack-label
            dense
          />
          <q-input
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            label="Password"
            outlined
            stack-label
            dense
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input
            v-model="address"
            type="text"
            label="Address"
            outlined
            stack-label
            dense
          />
          <div class="row q-gutter-x-xl">
            <q-card
              class="clickable col user-card text-center"
              v-ripple
              @click="chooseUser('shelter')"
              :class="isShelter ? '' : 'light-dimmed'"
            >
              <div class="text-h6">Shelter</div>
              <q-icon name="house" size="2rem" />
            </q-card>
            <q-card
              class="clickable col user-card text-center"
              v-ripple
              @click="chooseUser('donor')"
              :class="isShelter == false ? '' : 'light-dimmed'"
            >
              <div class="text-h6">Donor</div>
              <q-icon name="night_shelter" size="2rem" />
            </q-card>
          </div>
          <q-input
            v-if="isShelter"
            v-model="shelterName"
            type="text"
            label="Shelter Name"
            outlined
            stack-label
            dense
          />
          <q-btn
            label="Sign up"
            color="primary"
            type="submit"
            rounded
            @click="useEmailAuth"
          />
        </q-form>
      </q-card-section>
      <!-- Google alternative -->
      <q-card-section class="row justify-center">
        <div class="row fit no-wrap q-gutter-x-sm justify-start items-center">
          <q-separator class="col q-ml-lg" />
          <div class="col-grow text-grey">or</div>
          <q-separator inset class="col" />
        </div>
        <google-button />
      </q-card-section>
    </div>
    <q-separator vertical />
    <!-- Right Column -->
    <div class="col text-center">
      <div class="text-h6">Join Today!</div>
      <div class="text-caption">Start to contribute back to the community.</div>
      <q-img src="../../../assets/PuzzlePeople.jpg" />
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import GoogleButton from '../GoogleButton.vue';
import { useRouter } from 'vue-router';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  addDoc,
  setDoc,
  collection,
  getFirestore,
  doc,
} from 'firebase/firestore';
export default defineComponent({
  components: {
    GoogleButton,
  },
  setup() {
    // Credential Vars
    const email = ref('');
    const password = ref('');
    const shelterName = ref('');
    const isPwd = ref(true);
    const isShelter = ref<boolean | undefined>(undefined);
    const address = ref('');
    const error = ref('');

    // Router
    const $route = useRouter();

    // Firebase
    const db = getFirestore();

    // Create account via email password provider
    async function useEmailAuth() {
      if (password.value) {
        if (isShelter.value == undefined) {
          error.value = 'Please select a type of user';
          return;
        }
        const auth = getAuth();
        const res = await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
        // If successful add to firestore and navigate to dashboard
        if (res.user) {
          await setDoc(doc(db, 'users', res.user.uid), {
            email: res.user.email,
            isShelter: isShelter.value,
            address: address.value,
            createdAt: new Date(),
          });
          if (isShelter.value) {
            await setDoc(doc(db, 'shelters', res.user.uid), {
              name: shelterName.value,
              address: address.value,
            });
          }
          $route.push('/dashboard');
        }
      } else {
        console.log('ERR!');
        error.value = 'Password is required';
      }
    }

    async function chooseUser(type: string) {
      isShelter.value = type == 'shelter' ? true : false;
    }
    return {
      // primitives
      email,
      password,
      shelterName,
      isPwd,
      isShelter,
      error,
      // Functions
      useEmailAuth,
      chooseUser,
    };
  },
});
</script>

<style lang="scss">
.credential-input {
  width: 25vw;
}
.card-user {
  max-width: 100px;
}
.sign-card {
  min-width: 70vw;
}
// outside box label
.q-field__inner .q-field__label {
  top: -10px;
  left: -12px;
  padding-bottom: 15px;
}
</style>
