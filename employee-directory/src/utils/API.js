// import React from "react";
import axios from "axios";
// eslint-disable-next-line
export default {

    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=15&nat=AU");
    }
};
// const getUsers = function () {
//     return axios.get("https://randomuser.me/api/?results=15&nat=AU");
// }

// export default getUsers;