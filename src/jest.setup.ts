/* eslint-disable no-console */
import { TestingModule } from '@nestjs/testing'
import { bootstrap } from 'src/modules/testing/main'
import { TestingDatabaseService } from 'src/modules/testing/testing-database.service'

let databaseService: TestingDatabaseService

const bootstrapDatabase = async () => {
  const app: TestingModule = await bootstrap({})

  databaseService = app.get<TestingDatabaseService>(TestingDatabaseService)
}
bootstrapDatabase().catch(error => console.log(error))

afterEach(async () => {
  if (databaseService) {
    await databaseService.clearDb()
  }
})
