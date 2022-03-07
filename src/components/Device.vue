<template>
  <div class="device" @click="$emit('device-click', device.id)">
    <div class="visualization">
      <img :src="devicesVisualization[device.type]" />
    </div>
    <div class="description">
      <h3>{{ device.name }}</h3>
      <p>{{ device.type }}</p>
    </div>
    <div class="connection">
      <div
        class="connection-icon"
        :style="{
          'background-color': this.devicesConnection[device.connectionState],
        }"
      ></div>
      <i>{{ device.connectionState }}</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Devices",
  props: ["device"],
  computed: {
    devicesVisualization() {
      return {
        bulb: require("../assets/bulb.svg"),
        outlet: require("../assets/plug.svg"),
        temperatureSensor: require("../assets/temperature.svg"),
      };
    },
    devicesConnection() {
      return {
        connected: "#00db2c",
        disconnected: "#808080",
        poorConnection: "#ff7b00",
      };
    },
  },
};
</script>

<style scoped>
.device {
  position: relative;
  display: flex;
  width: 22rem;
  height: 22vh;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  -webkit-box-shadow: 1px 1px 8px 0px #77777750;
  -moz-box-shadow: 1px 1px 8px 0px #77777750;
  box-shadow: 1px 1px 8px 0px #77777750;
  cursor: pointer;
}
.device:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
.device > * {
  pointer-events: none;
}
.visualization {
  position: absolute;
  bottom: 7%;
  right: 7%;
  width: 10%;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  row-gap: 5px;
}
h3 {
  font-size: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: 1px;
}
.connection {
  position: absolute;
  display: flex;
  align-items: center;
  column-gap: 5px;
  bottom: 10%;
}
.connection-icon {
  height: 15px;
  width: 15px;
  border-radius: 50%;
}
.connection i {
  font-size: 0.8rem;
}
@media only screen and (max-width: 768px) {
  .device {
    width: 20rem;
    height: 20vh;
  }
}
</style>