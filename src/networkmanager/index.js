import axios from "axios";

class NetworkManager {
  constructor() {
    this.controller = new AbortController();
    this.signal = this.controller.signal;
  }

  async fetch(url, method, data = null) {
    try {
      const config = {
        method,
        url,
        data,
        signal: this.signal,
      };

      const response = await axios(config);
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
      } else {
        console.error("Error occurred while fetching data:", error);
      }
    }
  }

  async get(url) {
    return this.fetch(url, "GET");
  }

  async post(url, data) {
    return this.fetch(url, "POST", data);
  }

  async patch(url, data) {
    return this.fetch(url, "PATCH", data);
  }

  async delete(url) {
    return this.fetch(url, "DELETE");
  }

  cancel() {
    this.controller.abort();
  }
}

const networkManager = new NetworkManager();

export default networkManager;
