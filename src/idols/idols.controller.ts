import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IdolsService } from './idols.service';
import { CreateIdolDto } from './dto/create-idol.dto';
import { UpdateIdolDto } from './dto/update-idol.dto';

@Controller('idols')
export class IdolsController {
  constructor(private readonly idolsService: IdolsService) {}

  @Post()
  create(@Body() createIdolDto: CreateIdolDto) {
    return this.idolsService.create(createIdolDto);
  }

  @Get()
  findAll() {
    return this.idolsService.findAll();
  }

  @Get(':fname')
  findOne(@Param('fname') fname: string) {
    return this.idolsService.findOne(fname);
  }

  @Patch(':fname')
  update(@Param('fname') fname: string, @Body() updateIdolDto: UpdateIdolDto) {
    return this.idolsService.update(fname, updateIdolDto);
  }

  @Delete(':fname')
  remove(@Param('fname') fname: string) {
    return this.idolsService.remove(fname);
  }
}
