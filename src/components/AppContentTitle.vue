<template>
  <v-flex style="background-color: #ECEFF1;" my-3 py-3 >
    <v-container >
          <p class="" style="line-height: 180%" v-html="contentHtml"/>
    </v-container>
  </v-flex>
</template>


<script>
export default {
  name : 'app-content-title',
  props: ['contentHtml', 'alignCenter'],
  data() {
    return {
    };
  },
};
</script>
