<template>
  <q-page>
    <div class="row hero">
      <div class="col left">
        <h1>Helping Hand</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
          pariatur.
        </p>
        <div class="q-gutter-sm">
          <q-btn label="Get Started" color="primary" no-caps />
          <q-btn class="video-button" icon="play_circle_outline" label="Watch Video" no-caps flat />
        </div>
      </div>
      <div class="col right">
        <q-img
          class="floating"
          src="~assets/landing/HelpingHand.jpg"
          width="100%"
        />
      </div>
    </div>
    <div class="row infocards">
      
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    console.log('hi');
  },
});
</script>

<style lang="scss" scoped>
.hero {
  padding: 6rem;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1 {
      font-size: 4rem;
      font-weight: 600;
      color: $text-dark;
    }
    p {
      font-size: 1.5rem;
      font-weight: 400;
      color: $text-light;
    }
    .video-button {
      color: $text-light;
    }
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes floating {
  from {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, -20px);
  }
  to {
    transform: translate(0, 0px);
  }
}
</style>
