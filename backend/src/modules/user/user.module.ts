import { Module } from '@nestjs/common'
import { AuthController } from './auth/auth.controller'
import { CodeController } from './code/code.controller'
import { CodeService } from './code/code.service'
import { AuthService } from './auth/auth.service'

@Module({
  imports: [],
  providers: [CodeService, AuthService],
  controllers: [AuthController, CodeController],
})
export class UserModule {}
