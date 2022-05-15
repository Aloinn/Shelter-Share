<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card flat class="q-dialog-plugin card border-round bg-transparent">
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

<style lang="scss" scoped>
.card {
  min-width: 600px;
  max-width: 800px;
}
</style>

<script>
import { useDialogPluginComponent } from 'quasar';
import { Shelter } from '../models';
import { reactive, ref, computed } from 'vue';
import { useFirebaseUser } from '@gcto/firebase-hooks';

export default {
  props: {
    shelter: Shelter,
  },
  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits,
  ],

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

    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();

    return {
      dialogRef,
      onDialogHide,

      onOKClick() {
        // on OK, it is REQUIRED to
        // call onDialogOK (with optional payload)
        onDialogOK();
        // or with payload: onDialogOK({ ... })
        // ...and it will also hide the dialog automatically
      },

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel,
    };
  },
};
</script>
