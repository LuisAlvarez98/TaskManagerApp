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
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 8080;
const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost/playground")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error", err));
const exampleSchema = new mongoose.Schema({
    name: String,
});
const Example = mongoose.model("Example", exampleSchema);
function createExample() {
    return __awaiter(this, void 0, void 0, function* () {
        const ex = new Example({
            name: "Luis",
        });
        try {
            const result = yield ex.save();
            console.log(result);
        }
        catch (ex) {
            console.log(ex);
        }
    });
}
app.get("/", (req, res) => {
    res.send("Hello world");
    createExample();
});
app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server listening on ${port}`);
});
//# sourceMappingURL=app.js.map