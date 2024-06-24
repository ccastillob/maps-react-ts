import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1IjoiY3Jpc3NtYXBib3giLCJhIjoiY2x4czNkd2FnMTFsdjJsbXpwM3o0bHhpcyJ9.gVVYRgnR-4LHDN3PfXyuRw",
  },
});

export default searchApi;
