import axios from "axios";

export const getRepo = () => 
  axios.get("https://api.github.com/users/KubaTuta/repos?sort=pushed")
  .then(response => response.data)
