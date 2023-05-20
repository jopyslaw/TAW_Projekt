import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import mongoConverter from "../service/mongoConverter";
import Promise from "bluebird";
import * as _ from "lodash";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    //questions: { type: [String] },
  },
  {
    collection: "category",
  }
);

categorySchema.plugin(uniqueValidator);

const categoryModel = mongoose.model("category", categorySchema);

const query = async () => {
  const result = await categoryModel.find();
  if (result) {
    return mongoConverter(result);
  }
};

const createNewOrUpdate = async (data) => {
  return Promise.resolve().then(() => {
    if (!data.id) {
      return new categoryModel(data).save().then((res) => {
        if (res[0]) {
          return mongoConverter(result[0]);
        }
      });
    } else {
      return categoryModel.findByIdAndUpdate(data.id, _.omit(data, "id"), {
        new: true,
      });
    }
  });
};

export default {
  query: query,
  createNewOrUpdate: createNewOrUpdate,
  model: categoryModel,
};
