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
        <h2>What's your date of birth ?</h2>
        <p>As it appears on your health card.</p>
        <label>Date of Birth</label>
        <div class="birthdayFields">
        <v-select
  label="Month"
  :items="['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']"
></v-select>
          <v-text-field
          class="yearField"
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="DD"
            required
            placeholder="DD"
          ></v-text-field>
          <v-text-field
          class="yearField"
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="YYYY"
            required
            placeholder="YYYY"
          ></v-text-field>
          </div>
            <div class="pressEnter">
             Press Enter <v-btn class="pressEnterBtn" prepend-icon="mdi-arrow-right" @click="next()"> </v-btn>
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
  mounted() {},
  methods: {
    next() {
      this.$router.push({ name: "Health" });
    },
  },
};
</script>