"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNuevo = void 0;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1.default.Schema, model = mongoose_1.default.model;
var userSchema = new Schema({
    // id: {type: Number, unique:true},
    name: { type: String, required: true },
    surname: { type: String, required: false },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date,
});
exports.UserNuevo = mongoose_1.default.model('UsersDeMichi', userSchema); //este User es el que le da nombre a la subcarpeta de mongoDB
exports.default = exports.UserNuevo;
