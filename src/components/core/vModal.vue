<template>
  <v-dialog v-model="show" max-width="450">
    <v-card>
      <slot name="title">
        <v-card-title class="headline"> Are you sure about that? </v-card-title>
      </slot>

      <slot name="message">
        <v-card-text> You cannot reverse </v-card-text>
      </slot>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="clickCancel"> Hủy </v-btn>

        <v-btn color="green darken-1" text @click="clickSubmit">
          Xác nhận
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["show", "clickSubmit", "clickCancel"],
};
</script>

<style></style>
