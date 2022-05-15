<template>
  <q-dialog>
    <q-card>
      <div class="container">
        <h6 class="text-h6 q-mb-md">Donate item(s) ...</h6>
        <div v-if="!!errMsg">{{ errMsg }}</div>
        <div v-if="!!user">{{ user }}</div>
        <q-input
          class="q-mb-md"
          label="Name"
          v-model="formData.name"
          outlined
          stack-label
        />
        <q-input
          class="q-mb-md"
          label="Address"
          v-model="formData.address"
          outlined
          stack-label
        />
        <q-input
          class="q-mb-md"
          label="Items"
          v-model="formData.items"
          outlined
          stack-label
          type="textarea"
        />
        <q-btn
          color="primary"
          type="submit"
          label="Submit"
          @click="submitForm"
          no-caps
        />
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue';
import { useFirebaseUser } from '@gcto/firebase-hooks';

export default defineComponent({
  name: 'DonationForm',

  setup() {
    const userObject = useFirebaseUser();
    // Computed to refresh upon undefined validation
    const user = computed(() => userObject.data.value);

    // user?.value?.address
    const formData = reactive({
      name: '',
      address: '',
      items: '',
    });

    const errMsg = ref('');
    function submitForm() {
      // todo: add implementation
      console.log('form reached');
    }
    return { formData, submitForm, errMsg, user };
  },
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
