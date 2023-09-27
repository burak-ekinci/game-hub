import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params : {
        key: "9afa56b5824e402e8b82a57ddf490792",
    }
})