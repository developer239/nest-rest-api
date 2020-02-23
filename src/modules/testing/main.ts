import { ModuleMetadata } from '@nestjs/common/interfaces'
import { Test } from '@nestjs/testing'
import { DatabaseModule } from 'src/modules/database/database.module'
import { EnvModule } from 'src/modules/env/env.module'
import { TestingModule } from 'src/modules/testing/testing.module'

export const bootstrap = async (metadata: ModuleMetadata) => {
  const testingModule = await Test.createTestingModule({
    imports: [
      EnvModule,
      DatabaseModule,
      TestingModule,
      ...(metadata.imports ? metadata.imports : []),
    ],
    controllers: [...(metadata?.controllers ?? [])],
    providers: [...(metadata?.providers ?? [])],
    exports: [...(metadata?.exports ?? [])],
  }).compile()

  return testingModule
}
