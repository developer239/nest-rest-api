/* eslint-disable security/detect-object-injection */
import { Injectable } from '@nestjs/common'
import { classToClass } from 'class-transformer'
import { BaseEntity } from 'typeorm'

type IConstructorOf<TEntity> = new () => TEntity

@Injectable()
export class TestingEntityService {
  public async create<TEntity extends BaseEntity, TData>(
    model: IConstructorOf<TEntity>,
    data?: TData
  ): Promise<TEntity> {
    const instance = new model()

    for (const key of Object.keys(data)) {
      instance[key] = data[key]
    }

    await instance.save()

    return classToClass(instance)
  }
}
