<template>
  <div class="row infocards q-gutter-md">
    <q-card class="info-card">
      <q-card-section>
        <q-icon color="primary" name="location_on" size="2rem" />
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque,
          eveniet, placeat mollitia laboriosam accusamus dolore aspernatur
        </p>
      </q-card-section>
    </q-card>
    <q-card class="info-card">
      <q-card-section>
        <q-icon color="primary" name="analytics" size="2rem" />
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque,
          eveniet, placeat mollitia
        </p>
      </q-card-section>
    </q-card>
    <q-card class="info-card">
      <q-card-section>
        <q-icon color="primary" name="accessibility_new" size="2rem" />
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque,
          eveniet, placeat mollitia laboriosam accusamus
        </p>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
.infocards {
  display: flex;
  justify-content: space-evenly;
  .info-card {
    background-color: $secondary;
    max-width: 400px;
    h2 {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
}
</style>
