<template>
  <v-container fluid class="emailWrapper">
    <v-row>
      <v-col cols="12" md="12">
        <div class="d-flex logoWrap">
          <h2>{{hospitalName}}</h2>
        </div>
      </v-col>
    </v-row>
    <div class="progressWrapper">
        <v-progress-linear color="primary" :model-value="progress"></v-progress-linear>
    </div>
    <!---Email Step-->
    <div class="emailForm" v-if="step == 1">
      <v-form v-model="valid">
        <v-row class="align-items-center">
          <v-col cols="12" md="3">
            <v-btn class="emailArrowBtn" prepend-icon="mdi-arrow-left" @click="redirectImaging()"> </v-btn>
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
                <v-btn
                  class="pressEnterBtn"
                  prepend-icon="mdi-arrow-right"
                  @click="next(2)"
                >
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
            <v-btn class="emailArrowBtn" prepend-icon="mdi-arrow-left" @click="previous()"> </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <div class="emailFormInner">
              <h2>What's your first & middle name ?</h2>
              <p>
                As it appears on your crad. Please include any middle name(s)
                that appear on your health card.
              </p>
              <label>First & Middle name</label>
              <v-text-field
                v-model="firstMiddle"
                :rules="firstMiddleRules"
                :counter="10"
                label="e.g. Ali Nexusmd"
                required
                placeholder="e.g. Ali Nexusmd"
              ></v-text-field>
              <div class="pressEnter">
                Press Enter
                <v-btn
                  class="pressEnterBtn"
                  prepend-icon="mdi-arrow-right"
                  @click="next(3)"
                >
                </v-btn>
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
            <v-btn class="emailArrowBtn" prepend-icon="mdi-arrow-left" @click="previous()"> </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <div class="emailFormInner">
              <h2>What's your date of birth ?</h2>
              <p>As it appears on your health card.</p>
              <label>Date of Birth</label>
              <div class="birthdayFields">
                <v-select
                  label="Month"
                  v-model="dob.month"
                  :items="[
                    'January',
                    'March',
                    'Feburary',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                  ]"
                ></v-select>
                <v-text-field
                  class="yearField"
                  v-model="dob.day"
                  :rules="dob.day"
                  :counter="10"
                  label="DD"
                  required
                  placeholder="DD"
                ></v-text-field>
                <v-text-field
                  class="yearField"
                  v-model="dob.year"
                  :rules="dobRules.year"
                  :counter="10"
                  label="YYYY"
                  required
                  placeholder="YYYY"
                ></v-text-field>
              </div>
              <div class="pressEnter">
                Press Enter
                <v-btn
                  class="pressEnterBtn"
                  prepend-icon="mdi-arrow-right"
                  @click="next(4)"
                >
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="3"></v-col>
        </v-row>
      </v-form>
    </div>

    <!--Health card-->
    <div class="emailForm" v-if="step == 100">
      <v-form v-model="valid">
        <v-row class="align-items-center">
          <v-col cols="12" md="3">
            <v-btn class="emailArrowBtn" prepend-icon="mdi-arrow-left" @click="previous()"> </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <div class="emailFormInner healthFieldInner">
              <h2>What's your health ID number ?</h2>
              <p>
                If your health card has no version code, leave the last 2 digits
                empty.
              </p>
              <label>OHIP</label>
              <div class="healthFields">
                <v-text-field
                  class="yearField"
                  v-model="health.ohip"
                  :counter="10"
                  label="_ _ _ _-_ _ _-_ _ _"
                  required
                  placeholder="1 2 3 4-5 6 7-8 9 0"
                ></v-text-field>

                <div class="addField">
                  <span class="addhyphon">--</span>
                  <v-text-field
                    class="yearField"
                    v-model="ohip2"
                    :counter="10"
                    label="e.g AA"
                    required
                    placeholder="e.g AA"
                  ></v-text-field>
                </div>
              </div>
              <div class="pressEnter">
                Press Enter
                <v-btn
                  class="pressEnterBtn"
                  prepend-icon="mdi-arrow-right"
                  @click="next(5)"
                >
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="3"></v-col>
        </v-row>
      </v-form>
    </div>

    <!--Phone card-->
    <div class="emailForm" v-if="step == 4">
      <v-form v-model="valid">
        <v-row class="align-items-center">
          <v-col cols="12" md="3">
            <v-btn class="emailArrowBtn" prepend-icon="mdi-arrow-left" @click="previous()"> </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <div class="emailFormInner">
              <h2>What's your phone number ?</h2>
              <label>Phone Number</label>
              <v-text-field
                v-model="phone"
                :rules="phoneRules"
                :counter="10"
                label="e.g. 6471234567"
                required
                placeholder="e.g. 6471234567"
              ></v-text-field>
              <div class="pressEnter">
                Press Enter
                <v-btn
                  class="pressEnterBtn"
                  prepend-icon="mdi-arrow-right"
                  @click="next(5)"
                >
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="3"></v-col>
        </v-row>
      </v-form>
    </div>

    <!--confirm step-->
    <v-container class="confirmOuter" v-if="step == 5">
      <v-row class="align-items-center">
        <v-col cols="12" md="3">
          <v-btn class="emailArrowBtn" prepend-icon="mdi-arrow-left" @click="previous()"> </v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <div class="confirmInner">
            <h2>Confirm your details</h2>
            <p>
              Please take a moment to make sure all of the information is
              correct.
            </p>
            <div class="confirmBlock">
              <div class="singleBlock">
                <div class="singleBlockInner">
                  <label>Legal name</label>
                  <h5>{{firstMiddle}}</h5>
                </div>
                <div class="editBtn">
                  <v-btn class="editButton" @click="next(2)"> Edit</v-btn>
                </div>
              </div>
              <div class="singleBlock">
                <div class="singleBlockInner">
                  <label>Date of Birth</label>
                  <h5>{{dob.month}} {{dob.day}}, {{dob.year}}</h5>
                </div>
                <div class="editBtn">
                  <v-btn class="editButton" @click="next(3)"> Edit</v-btn>
                </div>
              </div>
              <!-- <div class="singleBlock">
                <div class="singleBlockInner">
                  <label>OHIP</label>
                  <h5>{{health.ohip}}</h5>
                </div>
                <div class="editBtn">
                  <v-btn class="editButton" @click="next(4)"> Edit</v-btn>
                </div>
              </div> -->
              <div class="singleBlock">
                <div class="singleBlockInner">
                  <label>Email</label>
                  <h5>{{email}}</h5>
                </div>
                <div class="editBtn">
                  <v-btn class="editButton" @click="next(1)"> Edit</v-btn>
                </div>
              </div>
              <div class="singleBlock lastBlock">
                <div class="singleBlockInner">
                  <label>Phone Number</label>
                  <h5>{{phone}}</h5>
                </div>
                <div class="editBtn">
                  <v-btn class="editButton" @click="next(4)"> Edit</v-btn>
                </div>
              </div>
            </div>
            <div class="fill-height beginBtn">
            <v-btn block  @click="next(6)"> Confirm </v-btn>
          </div>
          </div>

        </v-col>
        <v-col cols="12" md="3"> </v-col>
      </v-row>
    </v-container>

    <!-- Full name step-->
    <div class="emailForm nameForm" v-if="step == 6">
    <v-form v-model="valid">
      <v-row class="align-items-center">
      <v-col cols="12" md="3">
      <v-btn class="emailArrowBtn" prepend-icon="mdi-arrow-left" @click="previous()"> </v-btn>
      </v-col>
        <v-col cols="12" md="6">
        <div class="emailFormInner FullNameFields">
        <h2>What's your full name ?</h2>
        <p>Since the paitentis under the age of 13, their request must be submiited by an adult delegate. Please enter the details of the delegate below.</p>
        <label>Delegate's Full Name</label>
          <v-text-field
            v-model="fullName"
            :rules="fullNameRules"
            :counter="10"
            label="e.g. Ada Augusta Lovelace"
            required
            placeholder="e.g. Ada Augusta Lovelace"
          ></v-text-field>
            <div class="pressEnter">
             Press Enter <v-btn class="pressEnterBtn" prepend-icon="mdi-arrow-right" @click="next(7)"> </v-btn>
            </div>
          </div>
        </v-col>
          <v-col cols="12" md="3"></v-col>
      </v-row>
    </v-form>
    </div>

    <!--Relation step-->
    <v-container class="confirmOuter" v-if="step == 7">
        <v-row class="align-items-center">
        <v-col cols="12" md="3">
         <v-btn class="emailArrowBtn" prepend-icon="mdi-arrow-left" @click="previous()"> </v-btn>
        </v-col>
          <v-col cols="12" md="6">
          <div class="confirmInner">
              <h2>What is your relationship to the paitent ?</h2>
              <div class="confirmBlock">
                  <div class="singleBlock" @click="setRelation(1)"  v-bind:class="[selectedRealtion == 1 ? 'singleBlockhover' : '']">
                    <div class="singleBlockInner">
                      <label>Family Member</label>
                      <h5>E.g. spouse, partner, parents, siblings, children, other relatives </h5>
                    </div>
                  </div>
                  <div class="singleBlock" @click="setRelation(2)" v-bind:class="[selectedRealtion == 2 ? 'singleBlockhover' : '']">
                    <div class="singleBlockInner">
                      <label>Legally Appointed Individual</label>
                      <h5>E.g. Power of Attorney for Personal Care, court-appointed guardian, representative appointed by Consent & Capacity Board
                      (no famil relation)</h5>
                    </div>
                  </div>
                  <div class="singleBlock" @click="setRelation(3)" v-bind:class="[selectedRealtion == 3 ? 'singleBlockhover' : '']">
                    <div class="singleBlockInner">
                      <label>Public Guardian & Trustee</label>
                    </div>
                  </div>
              </div>
              <div class="fill-height beginBtn">
                <v-btn block @click="redirectSignup()">
                      Next 
                </v-btn>
             </div>
            </div>
          </v-col>
          <v-col cols="12" md="3">
        </v-col>
        </v-row>
        </v-container>

  </v-container>
</template>

<script>
import "./style.css";

export default {
  data: () => ({
    email: "",
    firstMiddle: "",
    dob: {
      month: '',
      day: '',
      year: ''
    },
    health: {
      ohip: '',
      ohip2: ''
    },
    phone: '',
    fullName: '',
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    firstMiddleRules: [
      (v) => !!v || "First & middle name is required",
    ],
    dobRules:{
      month: [
      (v) => !!v || "Month is required",
      ],
      day: [
      (v) => !!v || "Day is required",
      ],
      year: [
      (v) => !!v || "Year is required",
      ]
    },
    phoneRules: [
      (v) => !!v || "Phone is required",
    ],
    fullNameRules: [
      (v) => !!v || "Phone is required",
    ],
    step: 1,
    progress: 14.28,
    selectedRealtion: '',
    hospitalName: ''
  }),
  mounted() {
    this.hospitalName =  this.$route.query.hospital;
  },
  methods: {
    next(stepNumber) {
      if (this.email) this.step = stepNumber;
      this.progress = this.step * 14.28;
    },
    previous(){
      this.step = this.step - 1;
      this.progress = this.step * 14.28;
    },
    setRelation(relation){
      this.selectedRealtion = relation;
    },
    redirectSignup(){
      this.$router.replace({name: "Signup"})
    },
    redirectImaging(){
      this.$router.replace({name: "Imaging",  query: {hospital: this.hospitalName}})
    }
  },
};
</script>
