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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const jwt_1 = require("@nestjs/jwt");
let UsersController = class UsersController {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async Login(username, password, body) {
        const code = await this.usersService.login(username, password, this.jwtService);
        return { code };
    }
    async test(request) {
        console.log(request);
    }
    test2(request) {
        console.log(request);
    }
    async addUser(username, email, password) {
        console.log("from signup: ", username, email);
        const code = await this.usersService.signup(email, username, password);
        return { code };
    }
    async getAllUsers() {
        const userdata = await this.usersService.getUsers();
        return userdata;
    }
    getUser(username) {
        console.log(username);
        return this.usersService.getSingleUser(username);
    }
    async updateUser(id, username, email, password) {
        await this.usersService.updateUser(id, username, email, password);
        return null;
    }
    async removeuser(username) {
        await this.usersService.deleteUser(username);
        return null;
    }
};
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)('Username')),
    __param(1, (0, common_1.Body)('Password')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "Login", null);
__decorate([
    (0, common_1.Get)('/test'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "test", null);
__decorate([
    (0, common_1.Post)('/test2'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "test2", null);
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)('username')),
    __param(1, (0, common_1.Body)('emailId')),
    __param(2, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.Patch)(':username'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('username')),
    __param(2, (0, common_1.Param)('email')),
    __param(3, (0, common_1.Param)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "removeuser", null);
UsersController = __decorate([
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService, jwt_1.JwtService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map