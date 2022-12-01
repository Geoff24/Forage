import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<T>;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigService);
    validate(payload: any): unknown;
}
export {};
