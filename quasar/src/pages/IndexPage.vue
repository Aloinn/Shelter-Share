<template>
  <q-page class="row items-center justify-evenly">{{ col }}</q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFirestoreCollection } from '@gcto/firebase-hooks';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const col = useFirestoreCollection('requests');
    return { col };
  },
});
</script>
