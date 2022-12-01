import { Like, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class LikesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.LikeCreateInput): Promise<Like>;
    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.LikeWhereUniqueInput;
        where?: Prisma.LikeWhereInput;
        orderBy?: Prisma.LikeOrderByWithRelationInput;
    }): Promise<Like[]>;
    findOne(LikeWhereUniqueInput: Prisma.LikeWhereUniqueInput): Promise<Like>;
    update(params: {
        where: Prisma.LikeWhereUniqueInput;
        data: Prisma.LikeUpdateInput;
    }): Promise<Like>;
    remove(where: Prisma.LikeWhereUniqueInput): Promise<Like>;
}
