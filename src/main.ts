import { NestFactory } from '@nestjs/core'
import { AppModule } from 'src/app.module'
import { EnvService } from 'src/modules/env/env.service'
import { TransformInterceptor } from 'src/transform.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const envConfig = app.get<EnvService>('EnvService')
  app.useGlobalInterceptors(new TransformInterceptor())
  await app.listen(envConfig.getInt('PORT'))
}

// eslint-disable-next-line
bootstrap()
