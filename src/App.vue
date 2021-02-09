<template>
  <div id="app">
    <HelloWorld :msg="msg"/>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import HelloWorld from './components/Header.vue';

export default {
  name: 'App',
  data(){
    return {
        msg: {
            text: 'Welcome to Your Vue.js App'
        }
    }
  },
  components: {
    HelloWorld,
  }
}
</script>


<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
