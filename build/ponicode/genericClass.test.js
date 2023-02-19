"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rewire_1 = __importDefault(require("rewire"));
const genericClass = (0, rewire_1.default)("../genericClass");
const List = genericClass.__get__("List");
// @ponicode
describe("List.getAll", () => {
    let inst2;
    beforeEach(() => {
        inst2 = new List([]);
    });
    test("0", () => {
        let result = inst2.getAll();
        expect(result).toMatchSnapshot();
    });
});
