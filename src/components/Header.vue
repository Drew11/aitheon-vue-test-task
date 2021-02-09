<template>
  <header>
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="hello">
      <h1>{{ msg.text }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header {
  background: linear-gradient(#BAD0E1, #A8C7E0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 50px;
  height: 50px;
}
h1 {
  color: #ffffff;
  margin-bottom: 5px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
@media screen and (max-width: 640px) {
  h1 {
    font-size: 24px;
  }
}

</style>
