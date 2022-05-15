<template>
  <div class="row items-center about-section q-my-lg">
    <div class="col q-pa-xl">
      <q-img src="~assets/landing/Community.jpg" width="100%" height="100%" />
    </div>
    <div class="col right fn-md q-pa-xl">
      <h2 class="fn-800 op-80 q-mb-sm">About Shelter Share</h2>
      <p class="op-60 fn-600 q-mb-md q-my-md">
        More than 200,000 people experience homelessness in any given year in
        Canada. This growing problem has not been improving. We have formulated
        a solution that allows shelters to be notified of residents that want to
        donate food or clothes on the fly. Our app deteremmins the cloest
        homeless shelter and notifies them whenever a user on our app pings they
        have food/clothes/anything to donate.
      </p>
      <p v-for="(c, i) in content" :key="i" class="fn-60 fn-sm fn-600">
        <q-icon color="primary" name="check_circle" size="1.25rem" />

        {{ c }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const content = [
      'Reduce waste and recycle unwanted clothes for people in need.',
      'Centralized place to locate nearby shelters to provide supplies.',
      'An easy way to positively impact your community and bring people together.',
    ];
    return { content };
  },
});
</script>
