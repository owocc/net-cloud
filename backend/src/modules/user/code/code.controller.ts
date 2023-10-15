import { Controller, Get, Post } from '@nestjs/common'
import { createTransport } from 'nodemailer'
import { CodeService } from './code.service'
@Controller('code')
export class CodeController {
  constructor(private codeService: CodeService) {}

  @Get()
  code() {
    return this.codeService.createImageCaptcha()
  }

  // 向指定邮箱发送验证码
  @Post('email')
  async sendEmailCode() {
    const transporter = createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: 'owocc@qq.com',
      subject: 'hello',
      text: 'hello world',
    })

    return 'hhh'
  }
}
