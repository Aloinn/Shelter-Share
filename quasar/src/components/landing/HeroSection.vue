<template>
  <div class="row hero">
    <div class="col left">
      <h1>Shelter <span>Share</span></h1>
      <p>
        Our mission to is reduce waste from residential spaces and repurpose it
        for homeless shelters around Canada.
      </p>
      <div class="q-gutter-sm">
        <q-btn
          class="get-started-button"
          label="Get Started"
          color="primary"
          no-caps
          to="/dashboard"
        />
        <q-btn
          class="video-button"
          icon="play_circle_outline"
          label="Watch Video"
          no-caps
          flat
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        />
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
</template>

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
      span {
        color: $primary;
      }
    }
    p {
      font-size: 1.5rem;
      font-weight: 400;
      color: $text-light;
    }
    .get-started-button span {
      color: $text-lighter !important;
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
