<template>
  <div>
    <v-detail-post v-if="!_.isEmpty(post)" :post="post"></v-detail-post>
    <v-loading :loading="loading"></v-loading>
  </div>
</template>

<script>
import VDetailPost from "@/components/post/vDetailPost";
import { mapActions } from "vuex";
import VLoading from "@/components/core/vLoading";
export default {
  name: "Detail",
  components: { VLoading, VDetailPost },
  data: () => ({
    loading: false,
    post: {},
  }),
  mounted() {
    const { id } = this.$route.params;
    this.loading = true;
    this.getPostById(id)
      .then((res) => {
        if (this._.isEmpty(res)) {
          this.$router.push({ name: "Not Found" });
        }
        this.post = res;
      })
      .catch(() => {
        this.$router.push({ name: "Not Found" });
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions("post", ["getPostById"]),
  },
};
</script>

<style scoped></style>
