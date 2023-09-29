"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AppRoute_1 = require("./AppRoute");
const cookie_session_1 = __importDefault(require("cookie-session"));
require("./controllers/LoginController");
const PORT = 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ["secret"] }));
app.use(AppRoute_1.AppRoute.getInstance());
app.listen(PORT, () => {
    console.log(`...listening port ${PORT}`);
});
exports.default = app;
