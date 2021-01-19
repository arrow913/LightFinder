import axios from "axios";

export default {
 
  getLights: function() {
    return axios.get("/api/lights");
  },
  
  loadLights: function() {
    return axios.post("/api/lights/");
  },
  
  addLights: function() {
    return axios.add("/api/lights/");
  },
 
  saveLights: function(lightData) {
    return axios.post("/api/lights", lightData);
  }
};