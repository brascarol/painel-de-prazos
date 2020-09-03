<template>
  <div id="app">
    <Toast />
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
  }
 
};
</script>

<style>
.app {
  padding-top: 0;
  height: 100%;
  width: 100%;
}
</style>
