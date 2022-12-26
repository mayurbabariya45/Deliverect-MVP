const { DeliverectModel } = require("../models");
const { APIError, STATUS_CODES } = require("../../utils/app-errors");

//Dealing with data base operations
class DeliverectRepository {
  async GetLinkedAccounts() {
    // Get Linked Accounts from DB, Here is sample code
    // try {
    // const filter = {};
    // const accounts = return await DeliverectModel.find(filter);
    // if (accounts?.length > 0) {
    //   return accounts;
    // } else {
    //   throw APIError(STATUS_CODES.NOT_FOUND, "No Record Found");
    // }
    //   return accounts;
    // } catch (err) {
    //   throw APIError(STATUS_CODES.INTERNAL_ERROR, "Internal error");
    // }
  }
}

module.exports = DeliverectRepository;
