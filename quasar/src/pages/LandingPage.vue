<template>
  <q-page>
    <hero-section id="/"></hero-section>
    <info-cards id="info"></info-cards>
    <about-section id="about"></about-section>
    <stats-section id="stats"></stats-section>
    <how-it-works id="howitworks"></how-it-works>
    <team-section id="team"></team-section>
    <footer-section></footer-section>
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
import FooterSection from 'src/components/landing/FooterSection.vue';

export default defineComponent({
  components: {
    HeroSection,
    InfoCards,
    AboutSection,
    StatsSection,
    HowItWorks,
    TeamSection,
    FooterSection,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
