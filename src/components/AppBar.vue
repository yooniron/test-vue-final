<template>
  <nav>
    <!-- SECTION: 상단 AppBar
    ======================================================================-->
    <v-app-bar app color flat>
      <v-container>
        <v-layout row align-center>
          <!-- 오른쪽 상단 Menu Mobile용 -->
          <div class="d-md-none">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          </div>

          <v-toolbar-title class="text-uppercase font-weight-bold toolbar-title mx-5">
              <router-link style="color:black;" :to="$route.path"  @click.native="reload" >{{this.$route.name}}</router-link>
          </v-toolbar-title>
          <v-spacer />

          <!-- 오른쪽 상단 Menu 태블릿이상용 -->
          <div class="d-none d-md-flex align-end">
            <v-row>
              <div :key="link.text" v-for="link in links">
                <v-list-item :to="link.route" v-if="link.route != null">
                  <v-list-item-title>{{link.text}}</v-list-item-title>
                </v-list-item>
                <v-list-item :href="link.href" target="_blank" v-else>
                  <v-list-item-title>{{link.text}}</v-list-item-title>
                </v-list-item>
              </div>
            </v-row>
          </div>
        </v-layout>
      </v-container>
    </v-app-bar>
    <!-- SECTION: 상단 AppBar -->

    <!-- SECTION: 옆쪽 Drawer
    ======================================================================-->
    <v-navigation-drawer app v-model="drawer" color="blue-grey lighten-5" temporary>
      <v-list>
        <div v-for="link in links" :key="link.text">
          <v-list-item
            v-if="link.route != null"
            router
            :to="link.route"
            class="blue-grey lighten-5"
          >
            <v-list-item-action>
              <v-icon color="black">{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content class="black--text">{{link.text}}</v-list-item-content>
          </v-list-item>
          <v-list-item v-else :href="link.href" target="_blank" class="blue-grey lighten-5">
            <v-list-item-action>
              <v-icon color="black">{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content class="black--text">{{link.text}}</v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
    <!-- SECTION: 옆쪽 Drawer -->
  </nav>
</template>

<script>
export default {
  name: "app-bar",
  data() {
    return {
      routerID: this.$router.currentRoute,
      drawer: null,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-file-account", text: "Projects", route: "/projects" },
        { icon: "mdi-blogger", text: "Blog", href: "https://yooniron.tistory.com/" }
      ]
    };
  },

  methods: {
    toggleDrawer() {
      this.drawer = false;
    },

    reload(){
      //this.$router.go();
       window.scrollTo(0,0);
        
    }
  }
};
</script>

<style >
.router-link-exact-active {
  color: white;
    text-decoration: none;
}

</style>