<template>
  <v-card class="mx-3 my-3" @click="goTodetail(pid)" >
    <v-img :src="getThumbnail" height="200px"></v-img>

    <v-card-title>{{title}}</v-card-title>

    <v-card-subtitle>{{subtitle}}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "app-card",
  props: {
    pid: {
      type: String,
      default: "#"
    },

    thumbnail: {
      type: String,
      default: ""
    },

    title: {
      type: String,
      default: "default Title"
    },

    subtitle: {
      type: String,
      default: "default subTitle"
    },

    description: {
      type: String,
      default: "default subTitle"
    }
  },

  data() {
    return {
  
    };
  },
  computed: {
    getThumbnail() {
      if (["", "/"].indexOf(this.thumbnail) >= 0) return "";
      else return this.thumbnail;
    }
  },
  methods: {
    goTodetail(pid, detailURL) {
      this.$router.push({ name: "상세보기", params: { id: pid } });
    },
  }
};
</script>

