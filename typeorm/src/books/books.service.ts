import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async create(bookData: CreateBookDto): Promise<Book> {
    const newBook = this.booksRepository.create(bookData);
    return await this.booksRepository.save(newBook);
  }

  async findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async findOne(id: number): Promise<Book> {
    return await this.booksRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateData: UpdateBookDto): Promise<number> {
    await this.booksRepository.update(id, updateData);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.booksRepository.delete(id);
    return id;
  }
}
