<template>
  <v-form v-model="valid"  class="confirmWrapper">
    <v-container fluid>
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
    <v-container class="confirmOuter">
      <v-row class="align-items-center">
      <v-col cols="12" md="3">
       <v-btn class="emailArrowBtn" prepend-icon="mdi-arrow-left"> </v-btn>
      </v-col>
        <v-col cols="12" md="6">
        <div class="confirmInner">
            <h2>Confirm your details</h2>
            <p>Please take a moment to make sure all of the information is correct.</p>
            <div class="confirmBlock">
                <div class="singleBlock">
                  <div class="singleBlockInner">
                    <label>Legal name</label>
                    <h5>Test Test</h5>
                  </div>
                  <div class="editBtn">
                       <v-btn class="editButton"> Edit</v-btn>
                  </div>
                </div>
                <div class="singleBlock">
                  <div class="singleBlockInner">
                    <label>Date of Birth</label>
                    <h5>Mar 11, 2002</h5>
                  </div>
                  <div class="editBtn">
                       <v-btn class="editButton"> Edit</v-btn>
                  </div>
                </div>
                <div class="singleBlock">
                  <div class="singleBlockInner">
                    <label>OHIP</label>
                    <h5>1111-111-111</h5>
                  </div>
                  <div class="editBtn">
                       <v-btn class="editButton"> Edit</v-btn>
                  </div>
                </div>
                <div class="singleBlock">
                  <div class="singleBlockInner">
                    <label>Email</label>
                    <h5>developerwebmaster3@gmail.com</h5>
                  </div>
                  <div class="editBtn">
                       <v-btn class="editButton"> Edit</v-btn>
                  </div>
                </div>
                <div class="singleBlock lastBlock">
                  <div class="singleBlockInner">
                    <label>Phone Number</label>
                    <h5>(985) 205 - 9137</h5>
                  </div>
                  <div class="editBtn">
                       <v-btn class="editButton"> Edit</v-btn>
                  </div>
                </div>
            </div>
          </div>
          <div class="fill-height beginBtn">
              <v-btn block>
                    Confirm
              </v-btn>
           </div>
        </v-col>
        <v-col cols="12" md="3">
      </v-col>
      </v-row>
      </v-container>
    </v-container>
  </v-form>

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