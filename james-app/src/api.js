// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: "http://james.restful.training/api/",

    // use your own key
    params: {
        key: "74694e635ebecdc0b39fa50d1d15f758e8b00934",
    },

    // make sure we get JSON back
    headers: {
        Accept: "application/json",
    },
});