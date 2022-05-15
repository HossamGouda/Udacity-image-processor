"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var makeDir = function (target) {
    return fs.mkdirSync(target);
};
var imaExtension = function (imageName) {
    return imageName.includes('.jpg' || '.jpeg' || '.png' || '.gif');
};
var exsist = function (file) {
    return fs.existsSync(file);
};
module.exports = {
    makeDir: makeDir,
    imaExtension: imaExtension,
    exsist: exsist,
};
// import { existsSync, mkdirSync } from "fs";
// const checkType = (fileName: string): boolean => {
//   return fileName.includes(".jpg" || ".jpeg" || ".png" || ".gif"); // check if the file doesn't include an extension
// };
// const fileExists = (imageLocation: string): boolean => {
//   return existsSync(imageLocation); // return whether or not the file exists synchronously
// };
// const createDir = (dirLocation: string) : void => {
//   return mkdirSync(dirLocation);
// }
// export { checkType, fileExists, createDir };
