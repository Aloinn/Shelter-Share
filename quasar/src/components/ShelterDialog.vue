<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card flat class="q-dialog-plugin card border-round bg-transparent">
      <div class="elevated border-round">
        <q-img :src="shelter.img" height="500" class="fit border-round">
          <div class="q-pa-md fit column">
            <div class="fn-lg fn-800 op-80 font-weight-lg q-pb-sm">
              {{ shelter?.name }}
            </div>
            <div class="fn-md fn-600 op-80 font-weight-md q-pb-sm">
              {{ shelter?.address }}
            </div>
            <div class="q-ma-sm fn-sm q-pa-md border-round bg-blur">
              {{ shelter?.info }}
            </div>
            <q-space />

            <div class="row q-col-gutter-x-md">
              <div class="col">
                <q-btn
                  unelevated
                  class="border-round fit fn-800 no-caps bg-white text-dark"
                  label="Shelter Info"
                  :href="shelter?.url"
                  no-caps
                />
              </div>
              <div class="col">
                <q-btn
                  unelevated
                  color="primary"
                  class="border-round fit fn-800 no-caps"
                  label="Send Donations"
                  @click="onOKClick"
                  no-caps
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

.font-weight {
  &-lg {
    font-weight: 700;
  }

  &-md {
    font-weight: 600;
  }

  &-sm {
    font-weight: 400;
  }
}
</style>

<script>
import { useDialogPluginComponent } from 'quasar';
import { Shelter } from './models';
import { useQuasar } from 'quasar';
import DonationDialog from './forms/DonationDialog.vue';

export default {
  props: {
    shelter: Shelter,
  },
  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits,
  ],
  setup(props) {
    const $q = useQuasar();
    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();

    return {
      dialogRef,
      onDialogHide,

      onOKClick() {
        $q.dialog({
          component: DonationDialog,
          componentProps: { shelterId: props.shelter.id },
        });
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
