import '../src'
import GoodModule from './__fixtures__/modules/Good.module'
import Abortable from './__fixtures__/task-abortable/Abortable.task'

describe(coreJest.abortTask, (): void => {
  it('aborts the task running', async (): Promise<void> => {
    coreJest.execTask('abortable-task', {
      coreConfigOverride: {
        tasks: { location: './tests/__fixtures__/task-abortable' }
      }
    })

    await coreJest.abortTask()

    expect(Abortable.iWasExecuted).toEqual(false)
    expect(Abortable.iWasAborted).toEqual(true)
    expect(GoodModule.iWasPrepared).toEqual(true)
    expect(GoodModule.iWasReleased).toEqual(true)
  })
})
