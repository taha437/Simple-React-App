import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const refreshTokens = new Schema({
  token: {
    type: String,
    required: true
  }
});

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    passwordSetToken: {
      type: String,
      required: true,
    },
    passwordSetTokenExpires: {
      type: Number,
      required: true,
    },
    email_verified: {
      type: Boolean,
      required: true,
    },
    refreshTokens: [refreshTokens]
  },
  {
    timestamps: true
  }
);

mongoose.set("useCreateIndex", true);
UserSchema.plugin(uniqueValidator);

export default mongoose.model("User", UserSchema);
