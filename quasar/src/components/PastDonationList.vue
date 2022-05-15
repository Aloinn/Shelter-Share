<template>
  <q-card>
    <q-list v-if="formatList.length > 0">
      <q-item>
        <div class="fn-lg text-center">Donation History</div>
      </q-item>
      <q-item v-for="(req, index) in formatList" :key="index">
        <q-icon
          name="check_circle"
          :color="req.data.status === 'pending' ? 'grey' : 'green'"
          size="45px"
        />
        <q-item-section class="row items-center">
          <div class="fn-md">{{ req.shelterData.name }}</div>
        </q-item-section>
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
