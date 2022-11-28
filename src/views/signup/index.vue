<template>
  <v-container fluid class="signupWrapper">
    <v-row>
      <v-col cols="12" md="12">
        <div class="d-flex logoWrapper">
          <img src="../../assets/nexusLogo.jpg" />
          <h1>Signup Patient</h1>
        </div>
      </v-col>
    </v-row>

    <div class="">
      <v-form v-model="valid">
        <v-row class="align-items-center">
          <v-col cols="12" md="2"></v-col>
          <v-col cols="12" md="8">
            <div class="signupInner">
              <div class="formGroup">
                <label>Email address*</label>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
              </div>
              <v-row class="align-items-center">
                <v-col cols="12" md="6">
                  <div class="formGroup">
                    <label>First name*</label>
                    <v-text-field
                      v-model="text"
                      :rules="textRules"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="formGroup">
                    <label>Last name*</label>
                    <v-text-field
                      v-model="text"
                      :rules="textRules"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
              <v-row class="align-items-center">
                <v-col cols="12" md="6">
                  <div class="formGroup">
                    <label>Password*</label>
                    <v-text-field
                      v-model="text"
                      :rules="textRules"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="formGroup">
                    <label>Confirm Password*</label>
                    <v-text-field
                      v-model="password"
                      :rules="passwordRules"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
              <v-row class="align-items-center">
                <v-col cols="12" md="6">
                  <div class="formGroup">
                    <label>Country Code*</label>
                    <v-select
                      label="Select"
                      :items="['United States(1)', 'India(91)']"
                    ></v-select>
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="formGroup">
                    <label>Phone Number*</label>
                    <v-text-field
                      v-model="password"
                      :rules="passwordRules"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
              <div class="formGroup">
                <label>Date of Birth</label>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
              </div>

              <div class="formGroup">
                <v-checkbox
                  v-model="terms"
                  color="secondary"
                  label="I agree to the terms of service and Privacy Policy*"
                ></v-checkbox>
              </div>
              <div class="submitBtn">
                <v-btn block> Submit </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="2"></v-col>
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
