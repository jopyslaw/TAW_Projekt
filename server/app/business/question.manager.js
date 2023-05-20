import QuestionDAO from "../DAO/QuestionDAO";

const create = (context) => {
  const queryAllQuestions = async () => {
    const result = QuestionDAO.queryAllQuestions();
    if (result) {
      return result;
    }
  };

  const queryQuestionsFromCategory = async (categoryId) => {
    const result = QuestionDAO.queryQuestionsFromCategory(categoryId);
    if (result) {
      return result;
    }
  };

  const queryQuestionsFromCategoryWithLimit = async (categoryId, limit) => {
    const result = QuestionDAO.queryQuestionsFromCategoryWithLimit(
      categoryId,
      limit
    );
    if (result) {
      return result;
    }
  };

  const createNewOrUpdate = async (data) => {
    const result = await QuestionDAO.addQuestionOrUpdate(data);
    if (result) {
      return result;
    }
  };

  return {
    queryAllQuestions,
    queryQuestionsFromCategory,
    queryQuestionsFromCategoryWithLimit,
    createNewOrUpdate,
  };
};

export default {
  create,
};