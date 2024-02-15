import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './entities/book.entity';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  async create(@Body() bookData: CreateBookDto): Promise<Book> {
    return await this.booksService.create(bookData);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') bookId: number): Promise<Book> {
    return this.booksService.findOne(bookId);
  }

  @Put('/:id')
  async update(
    @Param('id') bookId: number,
    @Body() updateData: UpdateBookDto,
  ): Promise<number> {
    return this.booksService.update(bookId, updateData);
  }

  @Delete('/:id')
  async remove(@Param('id') bookId: number): Promise<number> {
    return this.booksService.remove(bookId);
  }
}
