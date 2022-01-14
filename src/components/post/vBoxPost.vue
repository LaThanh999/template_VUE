<template>
  <div>
    <v-card class="mx-auto">
      <v-row>
        <v-col cols="4" class="d-flex justify-center align-center">
          <v-img
            class="white--text align-end ml-6"
            height="280"
            width="280"
            :src="
              !_.isEmpty(post.image)
                ? post.image[0].path
                : `https://waterinasuites.vn/wp-content/uploads/2016/10/wate-1288x724.jpg?x34614`
            "
          >
          </v-img>
        </v-col>
        <v-col cols="8">
          <div>
            <router-link :to="{ name: 'Detail', params: { id: post.post_id } }">
              <v-card-title>{{ _.get(post, "title") }}</v-card-title>
            </router-link>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
              </v-row>

              <div class="my-4 text-subtitle-1">Giá tiền: {{ price }}</div>

              <div class="text--primary mt-2">Địa chỉ: {{ address }}</div>

              <div class="text--primary mt-2">
                Người đăng: {{ _.get(post, "fullname") }}
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
              <v-row class="align-center">
                <v-col cols="3"
                  ><div class="teal--text ml-6">Liên hệ:</div></v-col
                >
                <v-col cols="9">
                  <!-- <router-link v-if="_.isEmpty(user)" :to="'/login'">
                    <v-btn rounded color="primary" outlined
                      >Đăng nhập để xem thông tin</v-btn
                    >
                  </router-link> -->
                  <v-chip-group>
                    <v-chip
                      color="primary"
                      outlined
                      v-if="!_.isEmpty(post.phone)"
                      @click="clickToURL(post.phone, 1)"
                      >Số điện thoại: {{ _.get(post, "phone") }}</v-chip
                    >

                    <v-chip
                      color="primary"
                      outlined
                      v-if="!_.isEmpty(post.zalo)"
                      @click="clickToURL(post.zalo, 2)"
                      >Zalo: {{ _.get(post, "zalo") }}</v-chip
                    >

                    <v-chip
                      color="primary"
                      outlined
                      v-if="!_.isEmpty(post.facebook)"
                      @click="clickToURL(post.facebook, 3)"
                      >Facebook: {{ _.get(post, "facebook") }}</v-chip
                    >
                  </v-chip-group>
                </v-col>
              </v-row>
            </v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "vBoxPost",
  props: {
    post: Object,
  },
  data: () => ({}),
  mounted() {},
  computed: {
    ...mapState("auth", ["user"]),
    address() {
      const { street, ward, district, city } = this.post;
      return `Đường ${street} - Phường ${ward} - Quận ${district} - ${city} `;
    },
    price() {
      return `${new Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 3,
      }).format(this.post.price)}đ`;
    },
  },
  methods: {
    clickToURL(value, type) {
      switch (type) {
        case 1:
          window.location.href = `tel:+${value}`;
          break;
        case 2:
          window.open(`https://zalo.me/${value}`, "_blank");
          break;
        case 3:
          window.open(`${value}`, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped></style>
