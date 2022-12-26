const DeliverectService = require("../services/deliverect-service");

module.exports = (app) => {
  const service = new DeliverectService();

  app.get("/", async (req, res, next) => {
    try {
      const { data } = await service.GetLinkedAccounts();
      return res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  });
};
