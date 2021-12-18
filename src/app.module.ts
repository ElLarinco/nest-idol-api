import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { IdolsModule } from './idols/idols.module';
import { Idol } from './idols/entities/idol.entity';
import { IdolSchema } from './schemas/idol.schema';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([{ name: Idol.name, schema: IdolSchema }]),
    IdolsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
