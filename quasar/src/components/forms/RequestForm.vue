<template>
  <div class="container">
    <h6 class="text-h6 q-mb-md">Request item(s)</h6>
    <div v-if="!!errMsg">{{ errMsg }}</div>
    <q-input
      class="q-mb-md"
      label="Location Name"
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
    <q-input
      class="q-mb-md"
      v-model="formData.additionalInfo"
      label="Additional Information ..."
      outlined
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
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'RequestForm',
  setup() {
    const formData = reactive({
      name: '',
      address: '',
      items: '',
      pickupTimeStart: '',
      pickupTimeEnd: '',
      additionalInfo: '',
    });
    const errMsg = ref('');

    function submitForm() {
      // todo: add implementation
      console.log('form reached');
    }
    return { formData, submitForm, errMsg };
  },
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
