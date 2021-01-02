import axios from "axios";

export default {
 
  getAddress: function() {
    return axios.get("/api/address");
  },
  getAddress: function(id) {
    return axios.get("/api/address/" + id);
  },
  
  deleteAddress: function(id) {
    return axios.delete("/api/address/" + id);
  },
 
  saveAddres: function(addressData) {
    return axios.post("/api/address", addressData);
  }
};