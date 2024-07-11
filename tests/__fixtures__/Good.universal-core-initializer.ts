import { CoreInitializer } from '@universal-packages/core'

export default class GoodInitializer extends CoreInitializer {
  public static iWasInitialized = false
  public static iWasAborted = false
  public static readonly initializerName = 'good-initializer'

  public async beforeTemplatePopulate(): Promise<void> {
    GoodInitializer.iWasInitialized = true
  }

  public abort(): Promise<void> | void {
    GoodInitializer.iWasAborted = true
  }
}
