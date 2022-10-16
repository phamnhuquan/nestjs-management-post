import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from '../dto/post.dto';
import { PostService } from '../service/post.service';


@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService){}

    @Get('all')
    getAllPost(@Query() query){
        return this.postService.getAllPost();
    }

    @Get(':id')
    getPostById(@Param('id') id: string) {
        return this.postService.getPostById(Number(id));
    }

    @Post()
    async createPost(@Body() post: CreatePostDto) {
        return this.postService.createPost(post);
    }

    @Put(':id')
    async replacePost(@Param('id') id: string,  @Body() post: UpdatePostDto) {
        return this.postService.replacePost(Number(id), post);
    }

    @Delete(':id')
    async deletePost(@Param('id') id: string){
        return this.postService.deletePost(Number(id));
    }
}
