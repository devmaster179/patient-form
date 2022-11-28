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
      <v-form v-model="valid" ref="form">
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
                  label="e.g. example@gmail.com"
                  placeholder="e.g. example@gmail.com"
                ></v-text-field>
              </div>
              <v-row class="align-items-center">
                <v-col cols="12" md="6">
                  <div class="formGroup">
                    <label>First name*</label>
                    <v-text-field
                      v-model="firstName"
                      :rules="firstNameRules"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="formGroup">
                    <label>Last name*</label>
                    <v-text-field
                      v-model="lastName"
                      :rules="lastNameRules"
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
                      v-model="password"
                      :rules="passwordRules"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="formGroup">
                    <label>Confirm Password*</label>
                    <v-text-field
                      v-model="confirmPassword"
                      :rules="confirmPasswordRules"
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
                      v-model="countryCode"
                      :rules="countryCodeRules"
                      label="Select"
                      :items="['United States(1)']"
                    ></v-select>
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="formGroup">
                    <label>Phone Number*</label>
                    <v-text-field
                      v-model="phone"
                      :rules="phoneRules"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
              <div class="formGroup">
                <label>Date of Birth</label>
                <v-text-field
                  v-model="dob"
                  :rules="dobRules"
                  required
                ></v-text-field>
              </div>

              <div class="formGroup">
                <v-checkbox
                  v-model="terms"
                  :rules="termRules"
                  color="secondary"
                  label="I agree to the terms of service and Privacy Policy*"
                ></v-checkbox>
              </div>
              <div class="submitBtn">
                <v-btn block @click="submit()"> Submit </v-btn>
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
import axios from 'axios';
import "./style.css";

export default {
  data: () => ({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    countryCode: '',
    phone: '',
    dob: '',
    firstname: "",
    lastname: "",
    terms: false,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    firstNameRules: [
      (v) => !!v || "Name is required",
    ],
    lastNameRules: [
      (v) => !!v || "Last Name is required",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
    ],
    confirmPasswordRules: [
      (v) => !!v || "Confirm password is required",
    ],
    countryCodeRules: [
      (v) => !!v || "Country code is required",
    ],
    phoneRules: [
      (v) => !!v || "Phone is required",
    ],
    dobRules: [
      (v) => !!v || "Date of birth is required",
    ],
    termRules: [
      (v) => !!v || "Term is required",
    ],
  }),
  mounted() {
    console.log('process.env.VUE_APP_API_BASE_URL', process.env.VUE_APP_API_BASE_URL);
  },
  methods: {
   async submit (){
    const isValidated =  await this.$refs.form.validate();
    if(isValidated.valid){
      console.log('form is valid');
      axios.post(`${process.env.VUE_APP_API_BASE_URL}/create_patient`, {
        email: this.email,
        firstName: this.firstName,
        lasName: this.lastName,
        password: this.password,
        countryCode: this.countryCode,
        phone: this.phone,
        dob: this.dob
      })
    }
   }
  },
};
</script>
