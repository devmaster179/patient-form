<template>
<v-container fluid class=" vh100">
<v-btn class="backBtn" prepend-icon="mdi-arrow-left">
  Back
</v-btn>
    <v-form v-model="valid">
      <v-container fluid class=" ">
        <v-row>
          <v-col cols="12" md="12">
          <div class="searchWrapper">
          <h3><img src="../../assets/health.png"> PockectHealth</h3>
          <h2>Request Your Medical Imaging Records</h2>
          <div class="inputBtn">
          <v-btn class="searchBtn">
            <img src="../../assets/search.png">
          </v-btn>
            <v-text-field
              v-model="query"
              :rules="queryRules"
              :counter="10"
              label="Search"
              required
              placeholder="Try typing your hospital / clinic name or address"
              @input="debouncedOnChange"
            >
              
          </v-text-field>
            <div class="searchSuggest">
              <ul>
                <li v-for="innerData in data">
                  {{ innerData.name }}
                </li>
              </ul>
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
import algoliasearch from 'algoliasearch';
import _ from 'lodash';

const client = algoliasearch(process.env.VUE_APP_AGOLIA_APPLICATION_ID, process.env.VUE_APP_AGOLIA_ADMIN_KEY);
const index = client.initIndex(process.env.VUE_APP_AGOLIA_INDEX_NAME);

import "./style.css";

export default {
  data: () => ({
    valid: false,
    query: "",
    queryRules: [
      (v) => !!v || "Search is required",
    ],
    data: []
  }),
  mounted() {
    console.log('process.env.VUE_APP_API_BASE_URL', process.env.VUE_APP_API_BASE_URL);
  },
  computed: {
    debouncedOnChange () {
      return _.debounce(this.search, 700);
    }
  },
  methods: {
   search (){
    if(!this.query) {
      this.data=[];
      return false;
    }
    index
      .search(this.query)
      .then(({ hits }) => {
        console.log('hits', hits);
        this.data = hits;
      })
      .catch(err => {
        console.log(err);
      });

   }
  },
};
</script>