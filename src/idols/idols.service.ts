import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IdolDocument } from 'src/schemas/idol.schema';
import { CreateIdolDto } from './dto/create-idol.dto';
import { UpdateIdolDto } from './dto/update-idol.dto';
import { Idol } from './entities/idol.entity';

@Injectable()
export class IdolsService {
  constructor(@InjectModel(Idol.name) private idolModel: Model<IdolDocument>) {}

  async create(createIdolDto: CreateIdolDto): Promise<Idol> {
    const createdIdol = new this.idolModel(createIdolDto);
    return createdIdol.save();
    //return 'This action adds a new idol';
  }

  async findAll(): Promise<Idol> {
    return this.idolModel.find().exec();
    //return `This action returns all idols`;
  }

  async findOne(fname: string) {
    return this.idolModel.findOne({ fname });
    //return `This action returns a #${id} idol`;
  }

  async update(fname: string, updateIdolDto: UpdateIdolDto) {
    return this.idolModel.updateOne({ fname }, { $set: { ...updateIdolDto } });
    //return `This action updates a #${id} idol`;
  }

  async remove(fname: string) {
    return this.idolModel.deleteOne({ fname });
    //return `This action removes a #${fname} idol`;
  }
}
