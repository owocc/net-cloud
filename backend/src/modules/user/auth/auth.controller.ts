
import { PrismaService } from '@/shared/services/prisma.service'
import { Controller, Post } from '@nestjs/common'
// 用户登录模块
@Controller('auth')
export class AuthController {
  constructor(private prisma: PrismaService) {}
  @Post()
  async Register() {
    return await this.prisma.user.findMany()
  }
}
