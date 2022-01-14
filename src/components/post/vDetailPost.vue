<template>
  <div>
    <v-carousel height="220px" hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in post.image"
        :key="i"
        :src="item.path"
      ></v-carousel-item>
    </v-carousel>
    <v-row class="mt-4">
      <v-col cols="8" class="d-flex align-center">
        <h3>
          {{ _.get(post, "title") }}
        </h3>
      </v-col>
      <v-col cols="4" class="d-flex justify-end">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="25"
        ></v-rating>
      </v-col>
      <v-col cols="12">
        <div class="text-subtitle-1">
          <h4>
            Giá tiền: <span class="ml-2 span-info">{{ price }}</span>
          </h4>
          <h4>
            Địa chỉ: <span class="ml-2 span-info"> {{ address }}</span>
          </h4>
          <h4>
            Ngày đăng ký:
            <span class="ml-2 span-info">{{
              new Date(_.get(post, "posting_date")).toLocaleString()
            }}</span>
          </h4>
          <h4>
            Nggười đăng bài:
            <span class="ml-2 span-info">{{ _.get(post, "fullname") }}</span>
          </h4>
        </div>
      </v-col>
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-card-text>
            <p class="text-h6 text--primary">Thông tin chi tiết</p>
            <div class="text--primary">
              {{ _.get(post, "description") }}
            </div>
          </v-card-text>
        </v-card>
        <v-divider></v-divider>
        <v-card class="mx-auto mt-6">
          <v-card-text>
            <p class="text-h6 text--primary">Thông tin liên hệ</p>
            <div class="text--primary">
              <v-card-actions class="mt-4 d-flex justify-center align-center">
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
              </v-card-actions>
            </div>
          </v-card-text>
        </v-card>
        <v-divider></v-divider>
        <v-card class="mx-auto mt-6">
          <v-card-text>
            <p class="text-h6 text--primary">Bản đồ</p>
            <div class="text--primary">
              Địa chỉ: {{ address }}
              <v-card-actions class="mt-4 d-flex justify-center align-center">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCEO6_cBl1VbRV2YkhGk8HeCFrJNFeWOjo&q=10.763208107260091, 106.68224680425318"
                  height="300"
                  width="100%"
                ></iframe>
              </v-card-actions>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "vDetailPost",
  props: {
    post: Object,
  },
  data: () => ({}),
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

<style lang="scss" scoped>
.span-info {
  color: rgb(0 0 0 / 62%) !important;
}
</style>
