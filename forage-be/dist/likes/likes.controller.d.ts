import { LikesService } from './likes.service';
import { Like as LikeModel } from '@prisma/client';
export declare class LikesController {
    private readonly likesService;
    constructor(likesService: LikesService);
    likes(req: any): Promise<LikeModel[]>;
    like(req: any, likeData: {
        apiId: string;
    }): Promise<LikeModel | null>;
    unlike(req: any, unlikeData: {
        apiId: string;
    }): Promise<LikeModel>;
}
