<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card flat class="q-dialog-plugin card border-round bg-transparent">
      <div class="elevated border-round">
        <q-img :src="shelter.img" height="500" class="fit border-round">
          <div class="q-pa-md fit column">
            <div class="fn-lg fn-800 op-80">{{ shelter?.name }}</div>
            <div class="fn-md fn-600 op-80">{{ shelter?.address }}</div>
            <div class="q-ma-sm fn-sm q-pa-md border-round bg-blur">
              {{ shelter?.info }}
            </div>
            <q-space />

            <div class="row q-col-gutter-x-md">
              <div class="col">
                <q-btn
                  unelevated
                  class="border-round fit fn-800 no-caps bg-white text-dark"
                  label="SHELTER INFO"
                  :href="shelter?.url"
                />
              </div>
              <div class="col">
                <q-btn
                  unelevated
                  color="primary"
                  class="border-round fit fn-800 no-caps"
                  label="REQUEST DONATION PICKUP"
                  @click="onOKClick"
                />
              </div>
            </div>
          </div>
        </q-img>
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
