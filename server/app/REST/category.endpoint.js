import business from "../business/business.containter";
import applicationException from "../service/applicationException";
import auth from "../middleware/auth";

const categoryEndpoint = (router) => {
  router.get("/api/categories", async (request, response, next) => {
    try {
      const result = await business.getCategoryManager().query();
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  });

  router.post("/api/category", async (request, response, next) => {
    try {
      const data = request.body;
      const result = await business
        .getCategoryManager()
        .createNewOrUpdate(data);
      response.status(201).send(result);
    } catch (error) {
      console.error(error);
    }
  });
};

export default categoryEndpoint;
