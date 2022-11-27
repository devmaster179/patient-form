<template>
  <v-container fluid class="emailWrapper">
    <v-row>
      <v-col cols="12" md="12">
        <div class="d-flex logoWrap">
          <a href="#"><img src="../../assets/clearLogo.png" /></a>
        </div>
      </v-col>
    </v-row>
    <div class="progressWrapper">
      <v-progress-linear color="primary" model-value="20"></v-progress-linear>
    </div>
    <div class="emailForm">
    <v-form v-model="valid">
      <v-row class="align-items-center">
      <v-col cols="12" md="3">
      <v-btn class="emailArrowBtn" prepend-icon="mdi-arrow-left"> </v-btn>
      </v-col>
        <v-col cols="12" md="6">
        <div class="emailFormInner healthFieldInner">
        <h2>What's your health ID number ?</h2>
        <p>If your health card has no version code, leave the last 2 digits empty.</p>
        <label>OHIP</label>
        <div class="healthFields">
        <v-text-field
          class="yearField"
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="_ _ _ _-_ _ _-_ _ _"
            required
            placeholder="1 2 3 4-5 6 7-8 9 0"
          ></v-text-field>

        <div class="addField">
          <span class="addhyphon">--</span>
          <v-text-field
          class="yearField"
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="e.g AA"
            required
            placeholder="e.g AA"
          ></v-text-field>
          </div>
          </div>
            <div class="pressEnter">
             Press Enter <v-btn class="pressEnterBtn" prepend-icon="mdi-arrow-right"  @click="next()"> </v-btn>
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
      this.$router.push({ name: "Phone" });
    },
  },
};
</script>