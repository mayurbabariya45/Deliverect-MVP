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
    if (!DELIVERECT_API_TOKEN) {
      const data = {
        _items: [
          {
            _id: "5f1***131",
            name: "Generic account",
            accountType: 1,
            currency: 1,
            posSystem: 10000,
            _updated: "2021-05-18T08:02:16.000000Z",
            _created: "2020-07-24T07:36:49.000000Z",
            _deleted: false,
            _etag: "004a4df4bcce3cae83fd530c4a502278633ffd42",
            locations: ["5f1***133", "606***b86", "606***555"],
            accounts: [],
            brands: [
              {
                name: "Generic account",
                brandId: "606***6c5",
              },
            ],
            deliverectVersion: "2.0",
            featureFlags: {
              menuLocationOverrides: false,
              autoApply: false,
              pullAvailabilities: false,
              combinedProductsPage: false,
              enableSelfOnboarding: false,
              reportsV2: false,
              enableDiscounts: false,
              enableDelivery: false,
            },
            region: "EU",
            settings: {
              taxExcl: false,
            },
            whitelabel: "deliverect",
            users: ["607***ca68"],
            reportingEndpoints: [
              {
                endpoint: "https://reporting-endpoint.com/reporting/newOrder",
                statusTrigger: [20],
                endpointType: 10,
              },
            ],
            _links: {
              self: {
                title: "accounts",
                href: "accounts/5f1***131",
              },
              related: {
                users: [
                  {
                    title: "users",
                    href: "users/607***a68",
                  },
                ],
                locations: [
                  {
                    title: "Locations",
                    href: "locations/5f1***133",
                  },
                  {
                    title: "Locations",
                    href: "locations/606***b86",
                  },
                  {
                    title: "Locations",
                    href: "locations/606***555",
                  },
                ],
                accounts: [],
              },
            },
          },
        ],
        _links: {
          parent: {
            title: "home",
            href: "/",
          },
          self: {
            title: "accounts",
            href: "accounts",
          },
          next: {
            title: "next page",
            href: "accounts?page=2",
          },
          last: {
            title: "last page",
            href: "accounts?page=11",
          },
        },
        _meta: {
          page: 1,
          max_results: 25,
          total: 11,
        },
      };
      return FormateData(data);
    }
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
