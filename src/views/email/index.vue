<template>
  <v-container fluid class="emailWrapper">
    <v-row>
      <v-col cols="12" md="12">
        <div class="d-flex logoWrap">
          <a href="#"><img src="../../assets/clearLogo.png" /></a>
        </div>
      </v-col>
    </v-row>
    <!---Email Step-->
    <div class="emailForm" v-if="step == 1">
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
                v-model="email"
                :rules="emailRules"
                :counter="10"
                label="e.g. example@gmail.com"
                required
                placeholder="e.g. example@gmail.com"
              ></v-text-field>
              <div class="pressEnter">
                Press Enter
                <v-btn class="pressEnterBtn" prepend-icon="mdi-arrow-right" @click="next(2)">
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="3"></v-col>
        </v-row>
      </v-form>
    </div>

    <!--FIrst and last name step-->
    <div class="emailForm nameForm" v-if="step == 2">
    <v-form v-model="valid">
      <v-row class="align-items-center">
      <v-col cols="12" md="3">
      <v-btn class="emailArrowBtn" prepend-icon="mdi-arrow-left"> </v-btn>
      </v-col>
        <v-col cols="12" md="6">
        <div class="emailFormInner">
        <h2>What's your first & middle name ?</h2>
        <p>As it appears on your crad. Please include any middle name(s) that appear on your health card.</p>
        <label>First & Middle name</label>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="e.g. Ada Augusta"
            required
            placeholder="e.g. Ada Augusta"
          ></v-text-field>
            <div class="pressEnter">
             Press Enter <v-btn class="pressEnterBtn" prepend-icon="mdi-arrow-right" @click="next(3)"> </v-btn>
            </div>
          </div>
        </v-col>
          <v-col cols="12" md="3"></v-col>
      </v-row>
    </v-form>
    </div>

    <!--date of birth step-->
    <div class="emailForm" v-if="step == 3">
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
             Press Enter <v-btn class="pressEnterBtn" prepend-icon="mdi-arrow-right" @click="next(4)"> </v-btn>
            </div>
          </div>
        </v-col>
          <v-col cols="12" md="3"></v-col>
      </v-row>
    </v-form>
    </div>

    <!--Health card-->
    <div class="emailForm" v-if="step == 4">
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
             Press Enter <v-btn class="pressEnterBtn" prepend-icon="mdi-arrow-right"  @click="next(5)"> </v-btn>
            </div>
          </div>
        </v-col>
          <v-col cols="12" md="3"></v-col>
      </v-row>
    </v-form>
    </div>

    <!--Phone card-->
    <div class="emailForm" v-if="step == 5">
    <v-form v-model="valid">
      <v-row class="align-items-center">
      <v-col cols="12" md="3">
      <v-btn class="emailArrowBtn" prepend-icon="mdi-arrow-left"> </v-btn>
      </v-col>
        <v-col cols="12" md="6">
        <div class="emailFormInner">
        <h2>What's your phone number ?</h2>
        <label>Phone Number</label>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="e.g. 6471234567"
            required
            placeholder="e.g. 6471234567"
          ></v-text-field>
            <div class="pressEnter">
             Press Enter <v-btn class="pressEnterBtn" prepend-icon="mdi-arrow-right"  @click="next(5)" > </v-btn>
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
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    step: 1
  }),
  mounted() {},
  methods: {
    next(stepNumber) {
      if(this.email)
      this.step = stepNumber;
    },
  },
};
</script>
