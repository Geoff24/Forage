import { JwtService } from '@nestjs/jwt';
import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from './forage-users/users.service';
interface UserRequest extends Request {
    user: any;
}
export declare class isAuthenticated implements NestMiddleware {
    private readonly jwt;
    private readonly userService;
    constructor(jwt: JwtService, userService: UsersService);
    use(req: UserRequest, res: Response, next: NextFunction): Promise<void>;
}
export {};
