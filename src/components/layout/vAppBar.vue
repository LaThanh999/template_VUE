<template>
  <v-app-bar app color="primary" flat>
    <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

    <v-tabs centered color="#FFFFFF">
      <v-tab v-for="(item, index) in items" :key="index" :to="item.path">
        {{ item.text }}
      </v-tab>
    </v-tabs>

    <v-spacer></v-spacer>

    <v-responsive max-width="260">
      <v-text-field
        dense
        flat
        hide-details
        rounded
        background-color="#B0BEC5"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      ></v-text-field>
    </v-responsive>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Trang chủ",
        path: "/home",
      },
      {
        text: "Cho thuê nhà",
        path: "/house",
      },
      {
        text: "Cho thuê trọ",
        path: "/motel",
      },
      {
        text: "Cho thuê chung cư",
        path: "/apartment",
      },
      {
        text: "Đăng bài",
        path: "/post",
      },
    ],
  }),
};
</script>

<style></style>
