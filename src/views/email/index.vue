<template>
  <v-container fluid class="emailWrapper">
    <v-row>
      <v-col cols="12" md="12">
        <div class="d-flex logoWrap">
          <a href="#"><img src="../../assets/clearLogo.png" /></a>
        </div>
      </v-col>
    </v-row>
    <div class="emailForm">
    <v-form v-model="valid">
      <v-row class="align-items-center">
      <v-col cols="12" md="3">
      <v-btn class="emailArrowBtn" prepend-icon="mdi-arrow-left"> </v-btn>
      </v-col>
        <v-col cols="12" md="6">
        <div class="emailFormInner">
        <h2>What's your email address ?</h2>
        <label>Email</label>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="e.g. example@gmail.com"
            required
            placeholder="e.g. example@gmail.com"
          ></v-text-field>
            <div class="pressEnter">
             Press Enter <v-btn class="pressEnterBtn" prepend-icon="mdi-arrow-right"> </v-btn>
            </div>
          </div>
        </v-col>
          <v-col cols="12" md="3"></v-col>
      </v-row>
    </v-form>
    </div>
  </v-container>
</template>

<script>
import "./style.css";

export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>
