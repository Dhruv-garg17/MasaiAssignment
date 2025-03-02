function Device(name, type, status = 'off') {
    this.name = name;
    this.type = type;
    this.status = status;
}

Device.prototype.turnOn = function () {
    this.status = 'on';
};

Device.prototype.turnOff = function () {
    this.status = 'off';
};

Device.prototype.getStatus = function () {
    return this.status;
};

function SmartHome(owner) {
    this.owner = owner;
    this.devices = [];
}

SmartHome.prototype.addDevice = function (device) {
    this.devices.push(device);
};

SmartHome.prototype.removeDevice = function (deviceName) {
    this.devices = this.devices.filter(device => device.name !== deviceName);
};

SmartHome.prototype.listDevices = function () {
    return this.devices.map(device => device.name);
};

function SmartDevice(name, type, brand, connectivity) {
    Device.call(this, name, type);
    this.brand = brand;
    this.connectivity = connectivity;
}

SmartDevice.prototype = Object.create(Device.prototype);
SmartDevice.prototype.constructor = SmartDevice;

SmartDevice.prototype.updateFirmware = async function () {
    return await fetch('https://mock-api.com/updateFirmware')
        .then(response => response.json())
        .then(data => data.status);
};

SmartDevice.prototype.checkConnectivity = function () {
    return this.connectivity;
};

function SmartLight(name, brand, connectivity, brightness = 50, color = 'white') {
    SmartDevice.call(this, name, 'light', brand, connectivity);
    this.brightness = brightness;
    this.color = color;
}

SmartLight.prototype = Object.create(SmartDevice.prototype);
SmartLight.prototype.constructor = SmartLight;

SmartLight.prototype.setBrightness = function (value) {
    this.brightness = value;
};

SmartLight.prototype.setColor = function (color) {
    this.color = color;
};

function SmartThermostat(name, brand, connectivity, temperature = 22, mode = 'cool') {
    SmartDevice.call(this, name, 'thermostat', brand, connectivity);
    this.temperature = temperature;
    this.mode = mode;
}

SmartThermostat.prototype = Object.create(SmartDevice.prototype);
SmartThermostat.prototype.constructor = SmartThermostat;

SmartThermostat.prototype.setTemperature = function (temp) {
    this.temperature = temp;
};

SmartThermostat.prototype.setMode = function (mode) {
    this.mode = mode;
};

function User(username, password) {
    this.username = username;
    this.password = password;
    this.smartHome = new SmartHome(username);
}

User.prototype.authenticate = async function () {
    return await fetch('https://mock-api.com/auth', {
        method: 'POST',
        body: JSON.stringify({ username: this.username, password: this.password })
    }).then(response => response.json());
};

User.prototype.addDeviceToHome = function (device) {
    this.smartHome.addDevice(device);
};

User.prototype.removeDeviceFromHome = function (deviceName) {
    this.smartHome.removeDevice(deviceName);
};

User.prototype.controlDevice = function (deviceName, action) {
    const device = this.smartHome.devices.find(d => d.name === deviceName);
    if (device) {
        action === 'on' ? device.turnOn() : device.turnOff();
    }
};
const user = new User("JohnDoe", "password123");

const light = new SmartLight("Living Room Light", "Philips", "WiFi");
const thermostat = new SmartThermostat("Bedroom Thermostat", "Nest", "WiFi");

user.addDeviceToHome(light);
user.addDeviceToHome(thermostat);

console.log("Devices in Smart Home:", user.smartHome.listDevices());

user.controlDevice("Living Room Light", "on");
console.log("Light Status:", light.getStatus());

user.controlDevice("Bedroom Thermostat", "off");
console.log("Thermostat Status:", thermostat.getStatus());

light.setBrightness(80);
console.log("Brightness:", light.brightness);

thermostat.setTemperature(24);
console.log("Temperature:", thermostat.temperature);

(async () => {
    console.log("Firmware Update:", await light.updateFirmware());
})();

console.log("Connectivity:", thermostat.checkConnectivity());
