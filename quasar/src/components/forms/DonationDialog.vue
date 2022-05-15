<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card flat class="q-dialog-plugin card border-round">
      <div class="container q-ma-md q-pt-md">
        <h6 class="fn-lg op-80 fn-600 q-mb-md title">Donate item(s) ...</h6>
        <q-form class="q-pt-md q-pb-md" @submit="submitForm">
          <q-card class="border-round q-my-md" v-if="user" flat bordered>
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
          <q-btn color="primary" type="submit" label="Submit" no-caps />
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
import { reactive, computed } from 'vue';
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
    const userObject = useFirebaseUser();
    // Computed to refresh upon undefined validation
    const user = computed(() => userObject.data.value);

    function submitForm() {
      addDoc(collection(db, 'requests'), {
        uid: user.value?.uid,
        name: user.value?.displayName,
        address: formData.address,
        items: formData.items,
        shelter: props.shelterId || '',
        status: 'pending',
      });
      onDialogOK();
    }

    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();

    return {
      user,
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
