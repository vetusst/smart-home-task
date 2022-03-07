<template>
  <div class="container">
    <Device
      v-for="device in smartDevice"
      :key="device.id"
      @device-click="showModal"
      :device="device"
    ></Device>
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      :deviceDetails="deviceDetails"
    />
  </div>
</template>

<script>
import Device from "./Device";
import Modal from "./Modal";
import makeRequest from "../utils/api";

export default {
  name: "Devices",
  components: {
    Device,
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      deviceDetails: {},
      smartDevice: [],
    };
  },
  methods: {
    showModal(id) {
      this.isModalVisible = true;

      this.deviceDetails = this.getSmartDeviceDetails(id);
      clearInterval(this.updateInteval)
      this.handleDetailsUpdate(id);
    },
    closeModal() {
      this.isModalVisible = false
    },
    getSmartDevice() {
      // GET /api/v1/devices
      return makeRequest("/api/v1/devices");
    },
    getSmartDeviceDetails(id) {
      // GET /api/v1/devices/{deviceId}
      return makeRequest(`/api/v1/devices/${id}`);
    },
    handleDeviceUpdate() {
      // "request" is sent every 1000s to update the devices state
      setInterval(() => {
        let res = this.getSmartDevice();
        if (JSON.stringify(res) !== JSON.stringify(this.smartDevice)) {
          this.smartDevice = res;
        }
      }, 1000);
    },
    handleDetailsUpdate(id) {
      // another "request" to update the devices' details state
      this.updateInteval = setInterval(() => {
        if (!this.isModalVisible) clearInterval(this.updateInteval);

        let res = this.getSmartDeviceDetails(id);
        if (JSON.stringify(res) !== JSON.stringify(this.deviceDetails)) {
          this.deviceDetails = res;
        }
      }, 1000);
    },
  },
  created() {
    this.smartDevice = this.getSmartDevice();

    this.handleDeviceUpdate();
  },
};
</script>   

<style scoped>
.container {
  display: flex;
  row-gap: 5vh;
  column-gap: 3vw;
  justify-content: space-evenly;
  width: 60%;
  margin: 0 auto;
  padding: 30px;
  flex-direction: row;
  flex-wrap: wrap;
}
@media only screen and (max-width: 768px) {
  .container {
    width: 100%;
    margin: 0;
    align-content: center;
    justify-content: center;
    row-gap: 30px;
  }
}
</style>