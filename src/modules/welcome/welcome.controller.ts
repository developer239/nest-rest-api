import { Controller, Get } from '@nestjs/common'

@Controller()
export class WelcomeController {
  @Get()
  getHello(): string {
    return 'Hello World!'
  }
}
