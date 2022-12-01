import { Module } from '@nestjs/common';
import { PantryService } from './pantry.service';
import { PantryController } from './pantry.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PantryController],
  imports: [PrismaModule],
  providers: [PantryService]
})
export class PantryModule {}
