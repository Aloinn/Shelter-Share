<template>
  <div class="row items-center about-section q-my-lg">
    <div class="col q-pa-xl">
      <q-img src="~assets/landing/Community.jpg" width="100%" height="100%" />
    </div>
    <div class="col right fn-md q-pa-xl">
      <h2 class="fn-800 op-80 q-mb-sm">About Shelter Share</h2>
      <p class="op-60 fn-600 q-mb-md q-my-md">
        More than 235,000 Canadians experience homelessness in any given year.
        The spare jacket in your closet or the extra microwavable meal could
        make a world of difference to someone who may need it more.
        <br /><br />
        Our mission is to make donating extra clothes or food an effortless
        task. That T-shirt in your closet was trendy back in 2015, but fell out
        of style. Instead of throwing it away, donate it by using Shelter
        Share's platform to ping a nearby shelter.
        <br /><br />
        The shelter may send someone to pick up the donations or one of our
        registered volunteers may act as a courier.
        <br /><br />
        <span class="text-primary fn-600"
          >When the option to recycle is convenient and accessible, everyone
          benefits.</span
        >
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
