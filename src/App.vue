<template>
  <div id="app">
    <headerMenu />
    <div id='#content'>
      <router-view/>
    </div>
  </div>
</template>

<script>
import headerMenu from './HeaderMenu'

export default {
  name: 'App',
  components: {
    headerMenu
  }
}
</script>

<style>
*:disabled {
  background: transparent;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  color: #2c3e50;
}

#content {
  flex-grow: 1;
}

a { 
  text-decoration: none;
}

input {
  border: 1px solid gray;
    border-radius: 5px;
    padding: 0;
    margin:0;
    display: block;
    outline: none;
}
</style>
