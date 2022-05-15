<template>
  <q-page>
    <div class="row justify-center">
      <div v-if="choice === 'donate'" class="q-ma-md"><donation-form /></div>
      <div v-else-if="choice === 'request'" class="q-ma-md">
        <request-form />
      </div>
      <div v-else>
        <div>I want to ....</div>
        <div>
          <q-btn label="Donate" @click="setChoice('donate')" />
          <q-btn label="Request a Donation" @click="setChoice('request')" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import RequestForm from '../components/forms/RequestForm.vue';
import DonationForm from '../components/forms/DonationForm.vue';
export default defineComponent({
  components: { RequestForm, DonationForm },
  setup() {
    const choice = ref('');
    const setChoice = (val: string) => (choice.value = val);
    return { choice, setChoice };
  },
});
</script>

<style lang="scss" scoped></style>
