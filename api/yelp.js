import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer LfOQkHn18IzTHQRUd46YhXfnyjVWJrukMwpocVbZI0Ev8N6kVf8XOVPfXNzARymvwp7T9B9WuaFa4Dr2HYRZ-V4TUB8yGk_bI4qpSHyTfFWWHuMfO5EZjEEwsPeSZXYx",
  },
});
