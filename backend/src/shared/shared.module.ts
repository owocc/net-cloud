import { Global, Module } from '@nestjs/common'
import { PrismaService } from './services/prisma.service'

// 全局共享模块
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class SharedModule {}
