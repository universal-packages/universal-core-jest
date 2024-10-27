import { CoreTask } from '@universal-packages/core'

export default class AbortableTask extends CoreTask {
  public static iWasExecuted = false
  public static iWasAborted = false
  public static readonly taskName = 'abortable-task'

  public async exec(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (AbortableTask.iWasAborted) return

    AbortableTask.iWasExecuted = true
  }

  public abort(): Promise<void> | void {
    AbortableTask.iWasAborted = true
  }
}
