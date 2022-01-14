<template>
  <v-app id="inspire">
    <v-app-bar></v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <span class="white--text text-h5">{{ _.get(user, "username") }}</span>
        </v-avatar>

        <div>{{ _.get(user, "email") }}</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-modal
      :show="showModal"
      :clickCancel="clickCancel"
      :clickSubmit="clickToHome"
    >
      <template slot="title">
        <v-card-title class="headline"> Thông báo </v-card-title>
      </template>
      <template slot="message">
        <v-card-text>
          Vui lòng đăng nhập để thực hiện tính năng này
        </v-card-text>
      </template>
    </v-modal>
  </v-app>
</template>

<script>
import vAppBar from "@/components/layout/vAppBar.vue";
import { mapActions, mapState } from "vuex";
import VModal from "@/components/core/vModal.vue";
export default {
  components: { vAppBar, VModal },
  data: () => ({
    drawer: null,
    items: [
      {
        icon: "mdi-home",
        title: "Đăng bài viết",
        to: "/post",
      },
      {
        icon: "mdi-book-check-outline",
        title: "Cập nhật thông tin cá nhân",
        to: "/edit-user",
      },
    ],
    selectedItem: 1,
    showModal: false,
  }),
  methods: {
    ...mapActions("auth", ["getMe"]),
    clickCancel() {
      this.$router.push("/");
    },
    clickToHome() {
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  watch: {
    user(value) {
      if (this._.isEmpty(value)) {
        this.showModal = true;
      } else this.showModal = false;
    },
  },
  async mounted() {
    await this.getMe();
    if (this._.isEmpty(this.user)) {
      this.showModal = true;
    }
  },
};
</script>
