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

  const deleteCategory = async (categoryId) => {
    const result = await CategoryDAO.deleteCategory(categoryId);
    if (result) {
      return result;
    }
  };

  const getCategoryById = async (categoryId) => {
    const result = await CategoryDAO.getCategoryById(categoryId);
    if (result) {
      return result;
    }
  };

  return {
    query,
    createNewOrUpdate,
    deleteCategory,
    getCategoryById,
  };
};

export default {
  create,
};
