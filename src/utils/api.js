import { smartDevice, smartDeviceDetails } from "../devicesData";

// Connection is changed randomly every 5000ms
setInterval(() => {
  randomizeConnection();
}, 5000);

const makeRequest = (path) => {
  if (path === "/api/v1/devices") {
    return JSON.parse(JSON.stringify(smartDevice));
  } else if (path.includes("/api/v1/devices/") && /\d$/.test(path)) {
    return JSON.parse(
      JSON.stringify(smartDeviceDetails[path.split("/").pop()])
    );
  }
};

export default makeRequest;

const randomizeConnection = () => {
  const connectionStates = ["connected", "disconnected", "poorConnection"];

  let randomId = getRandomNumber(1, 3);
  let oldConnectionState = smartDevice[randomId - 1].connectionState
  let randomConnectionState = connectionStates.filter(x => x !== oldConnectionState)[getRandomNumber(0, 1)];

  smartDevice[randomId - 1].connectionState = randomConnectionState;
  smartDeviceDetails[randomId]["connectionState"] = randomConnectionState;
  console.log('Connection changed')
};

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
