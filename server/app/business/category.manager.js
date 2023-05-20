import CategoryDAO from "../DAO/CategoryDAO";

const create = (context) => {
  const query = async () => {
    const result = CategoryDAO.query();
    if (result) {
      return result;
    }
  };

  const createNewOrUpdate = async (data) => {
    const result = await CategoryDAO.createNewOrUpdate(data);
    if (result) {
      return result;
    }
  };

  return {
    query,
    createNewOrUpdate,
  };
};

export default {
  create,
};
