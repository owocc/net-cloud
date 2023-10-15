import { Module } from '@nestjs/common'
import { UserModule } from './modules/user/user.module'
import { RouterModule } from '@nestjs/core'
import { ConfigModule } from '@nestjs/config'
import { SharedModule } from './shared/shared.module'

@Module({
  imports: [
    // 加载配置文件
    ConfigModule.forRoot(),
    UserModule,
    RouterModule.register([
      {
        path: '/api/user',
        module: UserModule,
      },
    ]),
    SharedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
