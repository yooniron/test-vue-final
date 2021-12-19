<template>
  <div>
    <v-spacer />
    <app-content-title
      class="headline font-weight-black"
      contentHtml="노윤철<br>Yoonchul, Roe.<br>(Email: dbscjf324@gmail.com)"
    />
   
    <!-- SECTION: 자기소개
    ======================================================================-->
    <div>
      <v-container style="margin-top: 2.5%; margin-bottom: 2.5%; ">
        <v-row class="pa-3 d-none d-md-flex">
          <v-col cols="12" md="6">
            <my-profile />
          </v-col>
          <v-col class="my text-center" cols="12" md="6">
            <v-img src="@/images/face.png" class="grey lighten-2 face mx-auto" width="200" />
          </v-col>
        </v-row>
        <v-row class="pa-3 d-md-none">
          <v-col class="my-auto text-center" cols="12" md="6">
            <v-img class="grey lighten-2 face mx-auto" src="@/images/face.png" width="200" />
          </v-col>
          <v-col cols="12" md="6">
             <my-profile />
          </v-col>
        </v-row>
		 <v-row class="text-center" justify="center">
              <v-btn color="pink lighten-1" outlined="outlined" to="/contact">
                <v-icon left="left">mdi-phone-hangup</v-icon>Contact
              </v-btn>
            </v-row>
      </v-container>
    </div>
    <!-- SECTION: 자기소개 -->
  </div>
</template>

<script>
import AppContentTitle from "../components/AppContentTitle.vue";
import MyProfile from "../components/MyProfile.vue";
export default {
  name: "layout-home",
  components: {
    MyProfile,
    AppContentTitle
  },

  data() {
    return {};
  }
};
</script>

<style scoped>
.face {
  width: 300px;
  height: auto;
}

.cardImg {
  width: 40px;
  height: 40px;
}

.left-line {
  border-left: 4px solid #41b883;
}

@media (min-width: 960px) {
  .picture-top {
    margin-bottom: 50px !important;
  }
}
.spacing-playground .v-select .v-input__prepend-outer,
.spacing-playground .v-select .v-input__append-outer {
  margin-top: 0.55rem;
  margin-right: 0.2rem;
}
</style>
