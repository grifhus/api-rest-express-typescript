"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const parserComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error("Incorrect or missing comment");
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isdate(dateFromRequest)) {
        throw new Error("Incorrect or missing date");
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error("incorrect or missing Weather");
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error("incorrect or missing Visibility");
    }
    return visibilityFromRequest;
};
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const isString = (string) => {
    return typeof string == "string";
};
const isdate = (date) => {
    return Boolean(Date.parse(date));
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parserComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
