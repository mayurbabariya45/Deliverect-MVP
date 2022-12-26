const axios = require("axios");

const { DeliverectRepository } = require("../database");
const { FormateData } = require("../utils");
const { APIError } = require("../utils/app-errors");

const { DELIVERECT_API_URL, DELIVERECT_API_TOKEN } = require("../config");

// All Business logic will be here
class DeliverectService {
  constructor() {
    // If we want to get data from DB, This is MVP code
    this.repository = new DeliverectRepository();
  }

  async GetLinkedAccounts() {
    try {
      const options = {
        method: "GET",
        url: `${DELIVERECT_API_URL}/accounts`,
        headers: {
          accept: "application/json",
          authorization: `Bearer ${DELIVERECT_API_TOKEN}`,
        },
      };

      const response = await axios.request(options);
      const linkedAccounts = response.data;
      return FormateData(linkedAccounts);
    } catch (err) {
      new APIError("Unable to Find any records", err);
      return FormateData({
        message: "Unable to Find any records",
        error: err,
      });
    }
  }

  // If we want to use Database then we can do something link this
  // async GetLinkedAccounts() {
  //   try {
  //     const linkedAccounts = await this.repository.GetLinkedAccounts();
  //     return FormateData(linkedAccounts);
  //   } catch (err) {
  //     new APIError("Unable to Find any records", err);
  //     return FormateData({
  //       message: "Unable to Find any records",
  //       error: err,
  //     });
  //   }
  // }
}

module.exports = DeliverectService;
