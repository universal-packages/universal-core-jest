import GoodModule from './__fixtures__/modules/Good.module'
import GoodTask from './__fixtures__/tasks/Good.task'

describe(jestCore.runApp, (): void => {
  it('runs an app for this test suite', async (): Promise<void> => {
    await jestCore.execTask('good-task')
    expect(core).toEqual({
      App: null,
      appConfig: null,
      appInstance: null,
      coreConfig: expect.anything(),
      coreModules: {},
      environments: [],
      logger: expect.anything(),
      projectConfig: { 'good-app': { good: true } },
      stoppable: true,
      stopping: false,
      Task: GoodTask,
      taskInstance: expect.any(GoodTask)
    })
    expect(GoodTask.iWasExecuted).toEqual(true)
    expect(GoodModule.iWasPrepared).toEqual(true)
    expect(GoodModule.iWasReleased).toEqual(true)
  })
})
