<template>
  <div class="row about-section">
    <div class="col left">
      <q-img
        src="~assets/landing/Community.jpg"
        width="100%"
        style="z-index: -1"
      />
    </div>
    <div class="col right">
      <h2>Voluptatem dignissimos</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
      <p>
        <q-icon color="primary" name="check_circle" size="1.25rem" /> Ullamco
        laboris nisi ut aliquip ex ea commodo consequat
      </p>
      <p>
        <q-icon color="primary" name="check_circle" size="1.25rem" /> Ullamco
        laboris nisi ut aliquip ex ea commodo consequat
      </p>
      <p>
        <q-icon color="primary" name="check_circle" size="1.25rem" /> Ullamco
        laboris nisi ut aliquip ex ea commodo consequat
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-section {
  padding: 3rem;
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 2rem;
    h2 {
      font-size: 3rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    p {
      color: $text-light;
    }
  }
}
</style>
