"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.writeFileSync = exports.writeFile = exports.writeBinaryFileSync = exports.writeBinaryFile = exports.stringify = exports.readFileSync = exports.readFile = exports.parse = exports.bplistParser = exports.bplistCreator = void 0;
var bplistCreator = __importStar(require("bplist-creator"));
exports.bplistCreator = bplistCreator;
var bplistParser = __importStar(require("bplist-parser"));
exports.bplistParser = bplistParser;
var parse_1 = require("./parse");
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parse_1.parse; } });
var readFile_1 = require("./readFile");
Object.defineProperty(exports, "readFile", { enumerable: true, get: function () { return readFile_1.readFile; } });
var readFileSync_1 = require("./readFileSync");
Object.defineProperty(exports, "readFileSync", { enumerable: true, get: function () { return readFileSync_1.readFileSync; } });
var stringify_1 = require("./stringify");
Object.defineProperty(exports, "stringify", { enumerable: true, get: function () { return stringify_1.stringify; } });
var writeBinaryFile_1 = require("./writeBinaryFile");
Object.defineProperty(exports, "writeBinaryFile", { enumerable: true, get: function () { return writeBinaryFile_1.writeBinaryFile; } });
var writeBinaryFileSync_1 = require("./writeBinaryFileSync");
Object.defineProperty(exports, "writeBinaryFileSync", { enumerable: true, get: function () { return writeBinaryFileSync_1.writeBinaryFileSync; } });
var writeFile_1 = require("./writeFile");
Object.defineProperty(exports, "writeFile", { enumerable: true, get: function () { return writeFile_1.writeFile; } });
var writeFileSync_1 = require("./writeFileSync");
Object.defineProperty(exports, "writeFileSync", { enumerable: true, get: function () { return writeFileSync_1.writeFileSync; } });
