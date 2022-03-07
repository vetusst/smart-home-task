export const smartDeviceDetails = {
  1: {
    type: "bulb",
    id: 1,
    name: "MyBulb",
    connectionState: 'connected', // 'connected', 'disconnected' or 'poorConnection'
    isTurnedOn: true,
    brightness: 50, // <0, 100>
    color: 'red', // in the CSS formats
  },
  2: {
    type: "outlet",
    id: 2,
    name: 'My outlet',
    connectionState: 'poorConnection', // 'connected', 'disconnected' or 'poorConnection'
    isTurnedOn: true,
    powerConsumption: '5', // in watts
  },
  3: {  
    type: "temperatureSensor",
    id: 3,
    name: 'My Sensor',
    connectionState: 'disconnected', // 'connected', 'disconnected' or 'poorConnection'
    temperature: '22', // in Celsius
  },
};

export const smartDevice = [
  {
    type: "bulb", // 'bulb', 'outlet' or 'temperatureSensor';
    id: 1,
    name: "MyBulb",
    connectionState: "connected", // 'connected', 'disconnected' or 'poorConnection'
  },
  {
    type: "outlet", // 'bulb', 'outlet' or 'temperatureSensor';
    id: 2,
    name: "My Outlet",
    connectionState: "poorConnection", // 
  },
  {
    type: "temperatureSensor", // 'bulb', 'outlet' or 'temperatureSensor';
    id: 3,
    name: "My Sensor",
    connectionState: "disconnected", // 'connected', 'disconnected' or 'poorConnection'
  },
]
