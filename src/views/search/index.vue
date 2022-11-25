<template class="blueColor">
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="8"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="Search"
              required
              placeholder="Try typing your hospital / clinic name or address"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>

<script>
import './style.css';

export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
}
</script>