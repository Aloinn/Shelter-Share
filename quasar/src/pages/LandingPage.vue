<template>
  <q-page>
    <hero-section id="/"></hero-section>
    <info-cards></info-cards>
    <about-section></about-section>
    <stats-section></stats-section>
    <how-it-works></how-it-works>
    <team-section></team-section>
    <shelter-signup></shelter-signup>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroSection from 'src/components/landing/HeroSection.vue';
import InfoCards from 'src/components/landing/InfoCards.vue';
import AboutSection from 'src/components/landing/AboutSection.vue';
import StatsSection from 'src/components/landing/StatsSection.vue';
import HowItWorks from 'src/components/landing/HowItWorks.vue';
import TeamSection from 'src/components/landing/TeamSection.vue';
import ShelterSignup from 'src/components/landing/ShelterSignup.vue';

export default defineComponent({
  components: {
    HeroSection,
    InfoCards,
    AboutSection,
    StatsSection,
    HowItWorks,
    TeamSection,
    ShelterSignup,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
