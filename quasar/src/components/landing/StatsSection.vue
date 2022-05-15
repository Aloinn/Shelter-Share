<template>
    <div class="row stats-section">
      <p-card class="stats-card">
        <p-card-section>
          <p>103</p>
          <h3>Shelters</h3>
        </p-card-section>
      </p-card>
      <p-card class="stats-card">
        <p-card-section>
          <p>456</p>
          <h3>Volunteers</h3>
        </p-card-section>
      </p-card>
      <p-card class="stats-card">
        <p-card-section>
          <p>1032</p>
          <h3>Users</h3>
        </p-card-section>
      </p-card>
      <p-card class="stats-card">
        <p-card-section>
          <p>2435</p>
          <h3>Donations</h3>
        </p-card-section>
      </p-card>
    </div>
</template>

<style lang="scss" scoped>
.stats-section {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  .stats-card {
    align-items: center;
    
    p {
      color: $primary;
      font-size: 3rem;
      font-weight: 600;
      margin-bottom: 0;
      text-align: center;
    }
    h3 {
      text-align: center;
    }
  }
}

</style>