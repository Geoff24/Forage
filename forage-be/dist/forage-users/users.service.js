"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async signup2(user) {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        const reqBody = {
            username: user.username,
            email: user.email,
            password: hash
        };
        const newUser = new this.userModel(reqBody);
        return newUser.save();
    }
    async login(username, password, jwt) {
        const foundUser = await this.userModel.findOne({ username: username }).exec();
        if (foundUser) {
            const comp = await bcrypt.compare(password, foundUser.password);
            if (comp) {
                console.log(common_1.HttpStatus.OK);
                return common_1.HttpStatus.OK;
            }
            else {
                console.log("incorrect password");
                console.log(common_1.HttpStatus.UNAUTHORIZED);
                return common_1.HttpStatus.UNAUTHORIZED;
            }
        }
        else {
            console.log("user not found");
            return common_1.HttpStatus.UNAUTHORIZED;
        }
    }
    async signup(email, username, password) {
        const foundUser = await this.userModel.findOne({ username: username }).exec();
        if (foundUser) {
            return common_1.HttpStatus.UNAUTHORIZED;
        }
        else {
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(password, salt);
            const newUser = new this.userModel({ email: email, username: username, password: hash });
            const userid = await newUser.save();
            console.log(userid);
            return common_1.HttpStatus.OK;
        }
    }
    async getUsers() {
        const users = await this.userModel.find();
        return users;
    }
    async getSingleUser(username) {
        const user = await this.findUser(username);
        return user;
    }
    async findUser(username) {
        const user = await this.userModel.findOne({ username: username });
        if (!user) {
            throw new common_1.NotFoundException('Could not find user.');
        }
        return user;
    }
    async updateUser(userid, username, email, password) {
        const updatedUser = await this.findUser(username);
        if (email) {
            updatedUser.email = email;
        }
        if (password) {
            updatedUser.password = password;
        }
        updatedUser.save();
    }
    async deleteUser(username) {
        await this.userModel.deleteOne({ username: username });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map