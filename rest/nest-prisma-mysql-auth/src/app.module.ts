import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { LoginController } from './login.controller'
import { PrismaService } from './prisma.service'

@Module({
  imports: [],
  controllers: [AppController, LoginController],
  providers: [PrismaService],
})
export class AppModule {}
