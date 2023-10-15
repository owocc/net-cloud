import { Injectable } from '@nestjs/common'
import { create } from 'svg-captcha'

@Injectable()
export class CodeService {
  createImageCaptcha() {
    const svg = create({
      color: true,
      size: 5,
      noise: 3,
      width: 100,
      height: 40,
    })

    const reuslt = {
      img: `data:image/svg+xml;base64,
      ${Buffer.from(svg.data).toString('base64')}`,
    }

    return reuslt
  }
}
