<template>
   <div id="app">
     <v-header></v-header>
     <v-news></v-news>
     <v-footer></v-footer>
    <router-view/>
   </div>
</template>
<script>
import header from './components/Header/Headers'
import footer from './components/Footer/Footers'
import news from './components/News/News'

export default {
  name:'App',
  data(){
    return{

    }
  },
  components:{
    'v-header':header,
    'v-footer':footer,
    'v-news':news
  }
}
</script>


<style lang="scss">
.app{
  margin:0;
  padding: 0;
}
</style>
