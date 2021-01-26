import Axios from "axios";

let axiosAtlas;

const axiosDev = Axios.create({
  baseURL:
    "http://localhost:5001/atlascodedev-landing/us-central1/api",
});

const axiosProd = Axios.create({
  baseURL:
    "https://us-central1-atlascodedev-landing.cloudfunctions.net/api",
});

if (process.env.NODE_ENV === "development") {
  axiosAtlas = axiosDev;
  console.log("Dev version of Axios is being used");
} else {
  axiosAtlas = axiosProd;
}

export default axiosAtlas;
