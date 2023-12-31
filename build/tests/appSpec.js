"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
const request = (0, supertest_1.default)(app_1.default);
describe('Testing endopoint:', () => {
    let email;
    let password;
    beforeAll(() => {
        email = "milesoda@yahoo.com";
        password = "pass";
    });
    it('GET endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield request.get('/login');
        expect(result.status).toBe(200);
    }));
    it('POST endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield request.post('/login').send({ email, password });
        console.log('RESULT: ', result.body);
        expect(result.body).toEqual({ email, password });
    }));
});
