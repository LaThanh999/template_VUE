<template>
  <div>
    <h3 class="ml-4 mb-4">Thông tin mô tả</h3>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="clickSubmit(formInput)"
      class="mx-4"
    >
      <v-row>
        <v-col cols="6">
          <v-autocomplete
            rounded
            clearable
            outlined
            dense
            label="Loại chuyên mục *"
            :items="types"
            v-model="formInput.type"
            solo
            return-object
            :rules="[(v) => !!v || 'Vui lòng điền thông tin']"
          ></v-autocomplete>
        </v-col>

        <v-col cols="6"></v-col>

        <v-col cols="6">
          <v-text-field
            outlined
            rounded
            dense
            v-model="formInput.title"
            :counter="255"
            label="Tiêu đề *"
            required
            :rules="[(v) => !!v || 'Vui lòng điền thông tin']"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            rounded
            dense
            type="text"
            v-model="formInput.fullname"
            :counter="12"
            label="Tên người liên hệ *"
            required
            :rules="[(v) => !!v || 'Vui lòng điền thông tin']"
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field
            outlined
            rounded
            dense
            type="number"
            v-model="formInput.price"
            :counter="12"
            label="Giá cho thuê *"
            required
            :rules="[(v) => !!v || 'Vui lòng điền thông tin']"
          >
            <v-icon slot="append"> mdi-currency-usd </v-icon></v-text-field
          >
        </v-col>

        <v-col cols="6">
          <v-text-field
            outlined
            rounded
            dense
            type="number"
            v-model="formInput.phone"
            :counter="11"
            label="Số điện thoại *"
            required
            :rules="[(v) => !!v || 'Vui lòng điền thông tin']"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            rounded
            dense
            type="text"
            v-model="formInput.facebook"
            :counter="12"
            label="Facebook *"
            required
            :rules="[(v) => !!v || 'Vui lòng điền thông tin']"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            rounded
            dense
            type="text"
            v-model="formInput.zalo"
            :counter="12"
            label="Zalo *"
            required
            :rules="[(v) => !!v || 'Vui lòng điền thông tin']"
          ></v-text-field>
        </v-col>

        <v-col cols="3">
          <v-text-field
            rounded
            clearable
            outlined
            dense
            label="Tỉnh/Thành Phố *"
            v-model="formInput.city"
            :rules="[(v) => !!v || 'Vui lòng điền thông tin']"
          ></v-text-field>
        </v-col>

        <v-col cols="3">
          <v-text-field
            rounded
            clearable
            outlined
            dense
            label="Quận/Huyện *"
            v-model="formInput.district"
            :rules="[(v) => !!v || 'Vui lòng điền thông tin']"
          ></v-text-field>
        </v-col>

        <v-col cols="3">
          <v-text-field
            rounded
            clearable
            outlined
            dense
            label="Phường/Xã *"
            v-model="formInput.ward"
            :rules="[(v) => !!v || 'Vui lòng điền thông tin']"
          ></v-text-field>
        </v-col>

        <v-col cols="3">
          <v-text-field
            rounded
            clearable
            outlined
            dense
            label="Đường/Phố *"
            v-model="formInput.street"
            :rules="[(v) => !!v || 'Vui lòng điền thông tin']"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-file-input
            label="Hình ảnh *"
            rounded
            multiple
            outlined
            prepend-icon=""
            prepend-inner-icon="mdi-camera"
            accept="image/png, image/jpeg, image/bmp"
            v-model="formInput.image"
            :rules="[(v) => !!v || 'Vui lòng điền thông tin']"
          ></v-file-input>
        </v-col>

        <v-textarea
          outlined
          rounded
          label="Nội dung mô tả *"
          v-model="formInput.description"
          :rules="[(v) => !!v || 'Vui lòng điền thông tin']"
        ></v-textarea>
      </v-row>

      <div class="d-flex justify-center mt-2">
        <v-btn :loading="loading" type="submit" color="primary" rounded>
          Xác nhận
        </v-btn>
      </div>
    </v-form>
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
  </div>
</template>

<script>
import vModal from "@/components/core/vModal.vue";
import { mapActions } from "vuex";
export default {
  components: { vModal },
  data: () => ({
    valid: true,
    formInput: {
      apartment_number: "444",
      street: "",
      ward: "",
      district: "",
      city: "",
      fullname: "",
      phone: "",
      facebook: "",
      zalo: "",
      title: "",
      price: null,
      area: 19,
      description: "",
      account_id: 1,
      image: [],
      type: null,
    },
    defaultFormInput: {
      apartment_number: "444",
      street: "",
      ward: "",
      district: "",
      city: "",
      fullname: "",
      phone: "",
      facebook: "",
      zalo: "",
      title: "",
      price: null,
      area: 19,
      description: "",
      account_id: 1,
      image: [],
      type: null,
    },
    loading: false,
    types: [
      {
        value: 0,
        text: "Trọ",
      },
      {
        value: 1,
        text: "Chung cư",
      },
      {
        value: 2,
        text: "Nhà",
      },
    ],
    showModal: false,
  }),
  methods: {
    ...mapActions("post", ["addPost"]),
    clickSubmit(payLoad) {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.addPost(payLoad)
          .then(() => {
            this.formInput = this.defaultFormInput;
          })
          .finally(() => {
            this.loading = false;
            this.$refs.form.resetValidation();
          });
      }
    },
    clickCancel() {
      this.$router.push("/");
    },
    clickToHome() {
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
