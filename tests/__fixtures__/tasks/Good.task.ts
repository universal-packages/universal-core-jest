import { CoreTask } from '@universal-packages/core'

export default class GoodTask extends CoreTask {
  public static iWasExecuted = false
  public static iWasAborted = false
  public static readonly taskName = 'good-task'

  public async exec(): Promise<void> {
    GoodTask.iWasExecuted = true
  }

  public abort(): Promise<void> | void {
    GoodTask.iWasAborted = true
  }
}
