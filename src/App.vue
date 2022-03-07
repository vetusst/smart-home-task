<template>
  <Header title="Smart Home" />
  <Devices />
</template>

<script>
import Header from "./components/Header";
import Devices from "./components/Devices";

export default {
  name: "App",
  components: {
    Header,
    Devices,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}
body {
  font-family: "Poppins", sans-serif;
  background-color: rgb(237, 239, 240);
}
</style>
