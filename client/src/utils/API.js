import axios from "axios";

export default {
 
  getLights: function() {
    return axios.get("/api/lights");
  },
  
  loadLights: function(id) {
    return axios.post("/api/lights/");
  },
  
  addLights: function(id) {
    return axios.add("/api/lights/");
  },
 
  saveLights: function() {
    return axios.insert("../lights/seedDB");
  }
};