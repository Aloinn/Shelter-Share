<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin card">
      <q-btn color="primary" icon="cancel" @click="onCancelClick" />
      <div class="q-pa-md">{{ shelter }}aasd</div>
      <q-card-actions align="right">
        <q-btn
          color="primary"
          label="REQUEST DONATION PICKUP"
          @click="onOKClick"
        />
        <q-btn
          color="primary"
          label="SHELTER INFO"
          href="https://www.thesitewizard.com/"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
.card {
  min-width: 600px;
}
</style>

<script>
import { useDialogPluginComponent } from 'quasar';
import { Shelter } from './models';

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
