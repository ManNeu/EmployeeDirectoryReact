// eslint-disable-next-line 

import axios from "axios";


const getUsers = function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
}
// getUsers: function () {


export default getUsers;