import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './forage-users/users.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot(
    'mongodb+srv://loremipsum:forage123@cluster0.5rodjye.mongodb.net/forage?retryWrites=true&w=majority',
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
