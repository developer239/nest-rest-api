import { Test, TestingModule } from '@nestjs/testing'
import { WelcomeController } from 'src/modules/welcome/welcome.controller'

describe('[controller] HelloController', () => {
  let helloController: WelcomeController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WelcomeController],
      providers: [],
    }).compile()

    helloController = app.get<WelcomeController>(WelcomeController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(helloController.getHello()).toBe('Hello World!')
    })
  })
})
