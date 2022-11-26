<template>
  <v-container fluid class="imaging">
    <v-form v-model="valid">
      <v-container fluid class="">
        <v-row>
          <v-col cols="12" md="12">
            <div class="imagingInner">
              <div class="titleImg">
                <h3>Imaging Record Access</h3>
                <img src="../../assets/clearLogo.png" />
              </div>
              <div class="cardBlock">
                <v-card class="mx-auto">
                  <template v-slot:title>
                    <img src="../../assets/secure.png" /> Secure Online Account
                  </template>
                  <v-card-text
                    >Upon completion of the following online request form, your
                    medical imaging history from
                    <strong>Clear Medical Imaging </strong>
                    will be transferred to you into a secure account maintained
                    by PocketHealth, a third-party platform.
                  </v-card-text>
                </v-card>
              </div>
              <div class="cardBlock">
                <v-card class="mx-auto">
                  <template v-slot:title>
                    <img src="../../assets/gallery.png" /> Entire Imaging
                    History
                  </template>
                  <v-card-text
                    >Your request will include all available imaging from your
                    history at Clear Medical Imaging. Once transferred, your
                    record will be maintained permanently within your
                    PocketHealth account for you to access, view, download, or
                    share with anyone, anywhere. If you are not already a
                    PocketHealth subscriber a fee will apply.
                  </v-card-text>
                </v-card>
              </div>
              <div class="cardBlock">
                <v-card class="mx-auto">
                  <template v-slot:title>
                    <img src="../../assets/gallery.png" /> Learn More
                  </template>
                  <v-card-text
                    >Visit <a href="#">pockethealth.com/patietns</a> to learn more about how
                    PockectHealth will empower you to take onwership over your health care.
                  </v-card-text>
                </v-card>
                  <div class="fill-height beginBtn">
                  <v-btn block>
                     Begin
                  </v-btn>
                  </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
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
