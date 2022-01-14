<template>
  <div>
    <h3>Danh sách nhà trọ</h3>
    <v-divider></v-divider>
    <div class="mt-4"></div>
    <v-row>
      <v-col cols="12" v-for="(item, index) in posts" :key="index">
        <v-col cols="10" offset="1">
          <v-box-post :post="item"></v-box-post>
        </v-col>
        <v-col cols="12"><v-divider></v-divider> </v-col>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination v-model="page" :length="nPage" circle></v-pagination>
    </div>
    <v-loading :loading="loading"></v-loading>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import VBoxPost from "@/components/post/vBoxPost";
import VLoading from "@/components/core/vLoading";

export default {
  name: "Home",
  components: { VLoading, VBoxPost },
  data: () => ({
    loading: false,
    page: 1,
    nPage: 1,
  }),
  computed: {
    ...mapState("post", ["posts"]),
  },
  watch: {
    page(value) {
      this.init(value);
    },
  },
  mounted() {
    this.init(this.page);
  },
  methods: {
    ...mapActions("post", ["getAllPost"]),
    init(value) {
      this.loading = true;
      this.getAllPost({
        type: 0,
        page: value,
        limit: 10,
      })
        .then((res) => {
          this.page = +res.page;
          this.nPage = +res.nPage;
          window.scrollTo(0, 0);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped></style>
