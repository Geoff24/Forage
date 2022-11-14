import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
      PrismaService,
      UserService
  ],
})
export class AppModule {}

//vim: ft=typescript ts=2 sw=2 sts=-1 sta et
