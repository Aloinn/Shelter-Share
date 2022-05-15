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
      <h2>About Shelter Share</h2>
      <p>
        More than 200,000 people experience homelessness in any given year in
        Canada. This growing problem has not been improving. We have formulated
        a solution that allows shelters to be notified of residents that want to
        donate food or clothes on the fly. Our app deteremmins the cloest
        homeless shelter and notifies them whenever a user on our app pings they
        have food/clothes/anything to donate.
      </p>
      <p>
        <q-icon color="primary" name="check_circle" size="1.25rem" /> Reduce
        waste and recycle unwanted clothes for people in need.
      </p>
      <p>
        <q-icon color="primary" name="check_circle" size="1.25rem" />
        Centeralized place to locate nearby shelters to provide supplies.
      </p>
      <p>
        <q-icon color="primary" name="check_circle" size="1.25rem" /> An easy
        way to positively impact your community and bring people together.
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
