import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
    Query,
  } from '@nestjs/common'
  import { PrismaService } from './prisma.service'
  import { User as UserModel, Post as PostModel, Prisma } from '@prisma/client'

@Controller()
export class LoginController {
    constructor(private readonly prismaService: PrismaService) {}

    @Get('login')
    async getPostById(@Param('id') id: string): Promise<any> {
      return 123
    }
}