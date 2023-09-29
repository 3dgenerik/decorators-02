"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const AppRoute_1 = require("../../AppRoute");
const controller = (pathPrefix) => {
    return (target) => {
        const router = AppRoute_1.AppRoute.getInstance();
        const targetPrototype = Object.getOwnPropertyNames(target.prototype);
        for (const key of targetPrototype) {
            const path = Reflect.getMetadata("path" /* AppFeatures.PATH */, target.prototype, key);
            const method = Reflect.getMetadata("method" /* AppFeatures.METHOD */, target.prototype, key);
            if (path && method) {
                router[method](`${pathPrefix}${path}`, target.prototype[key]);
            }
        }
    };
};
exports.controller = controller;
