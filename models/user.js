const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

//  User Schema

const userSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      trim: true,
      required: true,
      maxLength: 32,
    },
    email: {
      type: "String",
      trim: true,
      required: true,
      unique: true,
    },
    hashed_password: {
      type: "String",
      required: true,
    },
    about: {
      type: "String",
      trim: true,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
    history: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

// Virtual fields
// These are the fields that will not be saved in the
// saved to the database

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv4();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function(plainText){
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";

    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);