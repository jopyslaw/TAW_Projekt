import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
import mongoConverter from "../service/mongoConverter";
import { Promise } from "bluebird";
import * as _ from "lodash";

const questionSchema = new mongoose.Schema(
  {
    text: { type: String },
    answers: [String],
    goodAnswer: { type: String },
    category_id: { type: String },
  },
  {
    collection: "questions",
  }
);

questionSchema.plugin(mongooseUniqueValidator);

const QuestionModel = mongoose.model("questions", questionSchema);

const queryAllQuestions = async () => {
  const result = await QuestionModel.find();
  if (result) {
    return mongoConverter(result);
  }
};

const queryQuestionsFromCategory = async (categoryId) => {
  const result = await QuestionModel.find({ category_id: categoryId });
  if (result) {
    return mongoConverter(result);
  }
};

const queryQuestionsFromCategoryWithLimit = async (categoryId, limit) => {
  const result = await QuestionModel.find({ category_id: categoryId }).limit(
    limit
  );
  if (result) {
    return mongoConverter(result);
  }
};

const addQuestionOrUpdate = async (data) => {
  return Promise.resolve().then(() => {
    if (!data.id) {
      return new QuestionModel(data).save().then((res) => {
        if (res[0]) {
          return mongoConverter(res[0]);
        }
      });
    } else {
      return QuestionModel.findByIdAndUpdate(data.id, _.omit(data, "id"), {
        new: true,
      });
    }
  });
};

export default {
  queryAllQuestions,
  queryQuestionsFromCategory,
  queryQuestionsFromCategoryWithLimit,
  addQuestionOrUpdate,
  model: QuestionModel,
};
