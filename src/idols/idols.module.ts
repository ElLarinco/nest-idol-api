/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { IdolsService } from './idols.service';
import { IdolsController } from './idols.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IdolSchema } from 'src/schemas/idol.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Idol', schema: IdolSchema }])],
  controllers: [IdolsController],
  providers: [IdolsService],
})
export class IdolsModule {}
