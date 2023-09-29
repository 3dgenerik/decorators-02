"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.put = exports.patch = exports.del = exports.post = exports.get = void 0;
require("reflect-metadata");
const routeBinder = (method) => {
    return (path) => {
        return (target, key, desc) => {
            Reflect.defineMetadata("path" /* AppFeatures.PATH */, path, target, key);
            Reflect.defineMetadata("method" /* AppFeatures.METHOD */, method, target, key);
        };
    };
};
exports.get = routeBinder("get" /* AppMethod.GET */);
exports.post = routeBinder("post" /* AppMethod.POST */);
exports.del = routeBinder("delete" /* AppMethod.DEL */);
exports.patch = routeBinder("patch" /* AppMethod.PATCH */);
exports.put = routeBinder("put" /* AppMethod.PUT */);
