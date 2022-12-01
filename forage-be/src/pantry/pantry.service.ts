import { Injectable } from '@nestjs/common';
import { Prisma, Pantry } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PantryService {
  constructor(private prisma: PrismaService) { }

  async create(data: Prisma.PantryCreateInput) {
    return this.prisma.pantry.create({
      data,
    })
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PantryWhereUniqueInput;
    where?: Prisma.PantryWhereInput;
    orderBy?: Prisma.PantryOrderByWithRelationInput;
  }): Promise<Pantry[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.pantry.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });

  }

  async findOne(
    PantryWhereUniqueInput: Prisma.PantryWhereUniqueInput
  ): Promise<Pantry> {
    return await this.prisma.pantry.findUnique({
      where: PantryWhereUniqueInput,
    });
  }

  async update(params: {
    where: Prisma.PantryWhereUniqueInput;
    data: Prisma.PantryUpdateInput;
  }): Promise<Pantry> {
    const { where, data } = params;
    return this.prisma.pantry.update({
      data,
      where
    });
  }

  async remove(
    where: Prisma.PantryWhereUniqueInput
  ): Promise<Pantry> {
    return this.prisma.pantry.delete({
      where,
    });
  }
}

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
