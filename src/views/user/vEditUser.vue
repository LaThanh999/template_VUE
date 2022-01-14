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
          <v-text-field
            rounded
            clearable
            outlined
            dense
            label="Email*"
            v-model="formInput.email"
            solo
            return-object
            :rules="[(v) => !!v || 'Vui lòng điền thông tin']"
          ></v-text-field>
        </v-col>

        <v-col cols="6"></v-col>

        <v-col cols="6">
          <v-text-field
            outlined
            rounded
            dense
            v-model="formInput.phone"
            :counter="255"
            label="Số điện thoại *"
            required
            type="number"
            :rules="[(v) => !!v || 'Vui lòng điền thông tin']"
          ></v-text-field>
        </v-col>

        <v-col cols="6"></v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <div class="d-flex justify-center mt-2">
            <v-btn :loading="loading" type="submit" color="primary" rounded>
              Xác nhận
            </v-btn>
          </div>
        </v-col>
        <v-col cols="6"></v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    valid: true,
    formInput: {
      email: "",
      phone: null,
    },
    defaultFormInput: {
      email: "",
      phone: null,
    },
    loading: false,
    showModal: false,
  }),
  watch: {
    user(value) {
      if (this._.isEmpty(value)) {
        this.showModal = true;
      } else this.showModal = false;
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
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
