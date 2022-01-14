<template>
  <v-app id="inspire">
    <v-app-bar></v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item v-for="(item, index) in menus" :key="index" link>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col cols="10">
            <v-sheet min-height="85vh" rounded="lg" class="pa-4">
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import vAppBar from "@/components/layout/vAppBar.vue";
export default {
  components: { vAppBar },
  data: () => ({
    menus: [
      "Dưới 1 triệu",
      "Từ 1 đến 2 triệu",
      "Từ 2 đến 3 triệu",
      "Từ 3 đến 5 triệu",
      "Trên 5 triệu",
    ],
  }),
};
</script>
