<template>
  <div class="q-gutter-y-sm">
    <q-card flat bordered class="border-round">
      <q-list v-if="formatList.length > 0">
        <div class="fn-lg text-center q-my-md fn-800 op-80">
          Donation History
        </div>
        <q-separator class="q-my-sm" inset />
        <q-item v-for="(req, index) in formatList" :key="index">
          <q-card flat>
            <div class="row items-center">
              <q-icon
                name="check_circle"
                :color="req.data.status === 'pending' ? 'grey' : 'primary'"
                size="20px"
              />
              <div class="fn-md q-ml-md" v-if="req.shelterData">
                {{ req.shelterData.name }}
                <div class="op-60 fn-sm">Pending Pickup Confirmation</div>
              </div>
            </div>
          </q-card>
        </q-item>
      </q-list>
      <div v-else class="row justify-center items-center q-pa-xl">
        <div>
          <q-img src="../assets/SadFolder.png" />

          <div class="text-center text-bold q-mb-lg fn-lg">
            No Donation History
          </div>
          <div class="row justify-center">
            <q-btn
              class="donate-button"
              label="Donate Now!"
              @click="goDonate"
              color="primary"
            />
          </div>
        </div>
      </div>
    </q-card>
    <div
      class="row q-col-gutter-x-sm justify-center"
      v-if="formatList.length > 0"
    >
      <div class="col-4">
        <q-card
          class="fit column items-center justify-center q-py-lg border-round"
          flat
          bordered
        >
          <div class="fn-sm text-grey text-center">Total Donations</div>
          <div class="text-center text-bold fn-xxl text-primary">
            {{ formatList.length }}
          </div>
        </q-card>
      </div>
      <div class="col-4">
        <q-card
          class="fit column items-center justify-center q-py-lg border-round"
          flat
          bordered
        >
          <div class="fn-sm text-grey text-center">Total Items Donated</div>
          <div class="text-center text-bold fn-xxl text-primary">9</div>
        </q-card>
      </div>
      <div class="col-4">
        <q-card
          class="fit column items-center justify-center q-py-lg border-round"
          flat
          bordered
        >
          <div class="fn-sm text-grey text-center">Times Volunteered</div>
          <div class="text-center text-bold fn-xxl text-primary">1</div>
        </q-card>
      </div>
    </div>
    <div class="justify-center" v-if="formatList.length > 0">
      <q-card class="q-pa-lg fit border-round" bordered flat>
        <div class="fn-sm text-grey text-center">Contribution Percentage</div>
        <div class="text-center text-bold fn-xxl q-pa-md text-primary">
          {{ Math.floor((formatList.length / requestList.length) * 100) }}%
        </div>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import {
  useFirebaseUser,
  useFirestoreCollection,
  useFirestoreDoc,
} from '@gcto/firebase-hooks';
import { Request, Shelter } from './models';
import { useRouter } from 'vue-router';
// Dont ask... - sam
interface Temp {
  data: Request;
}
export default defineComponent({
  setup() {
    const userObject = useFirebaseUser();
    // Computed to refresh upon undefined validation
    const user = computed(() => userObject.data.value);
    const requests = useFirestoreCollection('requests');
    // Yo like I dont know how to use the hooks for queries so we filter that shit lol
    const requestList = computed(() => [
      ...([...(requests.data.value?.keys() || [])].map((key: string) => ({
        id: key,
        data: requests.data.value?.get(key) as Request,
      })) || []),
    ]);
    const formatList = computed(() => {
      const temp = requestList.value.filter((req: Temp) => {
        if (req.data.uid === user.value?.uid) {
          return {
            ...req,
          };
        }
      });
      return temp.map((object) => {
        const shelters = useFirestoreDoc<Shelter>(
          'shelters',
          () => object.data?.shelter
        );
        return {
          ...object,
          shelterData: shelters.data?.value,
        };
      });
    });
    const $router = useRouter();
    function goDonate() {
      $router.push('/dashboard/donate');
    }
    return {
      requestList,
      formatList,
      goDonate,
    };
  },
});
</script>

<style lang="scss" scoped>
.donate-button {
  width: 280px;
}
</style>
