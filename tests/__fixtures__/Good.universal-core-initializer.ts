import CoreInitializer from '@universal-packages/core/CoreInitializer'

export default class GoodInitializer extends CoreInitializer {
  public static iWasInitialized = false
  public static iWasAborted = false
  public static readonly taskName = 'good-initializer'

  public async initialize(): Promise<void> {
    GoodInitializer.iWasInitialized = true
  }

  public rollback(): Promise<void> | void {
    GoodInitializer.iWasAborted = true
  }
}
