import axios from "axios";


const lights = {
  method: 'GET',
  // url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
   url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBXqq-1Jq6i0QYq7-il5NRvUVldtNq0R-A&callback=initMap"
 
  // headers: {
  //   'x-rapidapi-key': 'AIzaSyBXqq-1Jq6i0QYq7-il5NRvUVldtNq0R-A'
    
  // }
};

axios.request(lights).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
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
