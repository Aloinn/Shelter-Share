<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card flat class="q-dialog-plugin card border-round">
      <div class="container q-ma-md">
        <h6 class="text-h6 q-mb-md title">Donate item(s) ...</h6>
        <q-form class="q-pt-md q-pb-md">
          <q-input
            class="q-mb-lg"
            label="Name"
            v-model="formData.name"
            dense
            outlined
            stack-label
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || '']"
          />
          <q-input
            class="q-mb-lg"
            label="Address"
            v-model="formData.address"
            outlined
            stack-label
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || '']"
          />
          <q-input
            class="q-mb-lg"
            label="Items"
            v-model="formData.items"
            outlined
            stack-label
            type="textarea"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || '']"
          />
          <q-btn
            color="primary"
            type="submit"
            label="Submit"
            @click="submitForm"
            no-caps
          />
        </q-form>
      </div>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
.card {
  min-width: 600px;
  max-width: 800px;
}

.title {
  font-weight: 600;
  font-size: 22pt;
}
</style>

<script>
import { useDialogPluginComponent } from 'quasar';
import { reactive } from 'vue';
import { useFirebaseUser } from '@gcto/firebase-hooks';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default {
  props: {
    shelterId: String,
  },
  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits,
  ],

  setup(props) {
    const formData = reactive({
      name: '',
      address: '',
      items: '',
    });

    const db = getFirestore();
    const user = useFirebaseUser();

    function submitForm() {
      addDoc(collection(db, 'requests'), {
        uid: user.data.value?.uid,
        name: formData.name,
        address: formData.address,
        items: formData.items,
        shelter: props.shelterId || '',
      });
      console.log('form reached');
    }

    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();

    return {
      dialogRef,
      onDialogHide,
      submitForm,
      formData,
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
