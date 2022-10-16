import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto, UpdatePostDto } from '../dto/post.dto';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostService {
    constructor(@InjectRepository(Post) 
                private readonly  postRepo: Repository<Post>
    ) {}
    
    async getAllPost(): Promise<Post[]> {
        throw await this.postRepo.find();
    }
    getPostById(arg0: number) {
        throw new Error('Method not implemented.');
    }
    createPost(post: CreatePostDto) {
        throw new Error('Method not implemented.');
    }
    replacePost(arg0: number, post: UpdatePostDto) {
        throw new Error('Method not implemented.');
    }
    deletePost(arg0: number) {
        throw new Error('Method not implemented.');
    }

}
