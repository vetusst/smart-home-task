<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
  <div>My Devices</div>
</template>


<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  height: 15vh;
  padding: 1rem 2rem;
  border-bottom: 1px solid #000;
  background-color: #fff;
}
header h1 {
  font-size: 2.5rem;
}
div {
  width: 100%;
  text-align: center;
  background-color: #384047;
  font-size: 16px;
  padding: 5px 0;
  color: #fff;
  letter-spacing: 1px;
}
</style>