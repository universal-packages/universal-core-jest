import '../src'
import GoodModule from './__fixtures__/modules/Good.module'
import GoodTask from './__fixtures__/tasks/Good.task'

describe(coreJest.execTask, (): void => {
  it('runs an the specified task', async (): Promise<void> => {
    await coreJest.execTask('good-task')
    expect(core).toEqual({
      App: null,
      appConfig: null,
      appInstance: null,
      coreConfig: expect.anything(),
      coreModules: {},
      developer: {
        updateProgress: expect.any(Function),
        bucket: {}
      },
      environments: [],
      Initializer: null,
      initializerInstance: null,
      logger: expect.anything(),
      projectConfig: { 'good-app': { good: true } },
      stoppable: true,
      stopping: false,
      Task: GoodTask,
      taskInstance: expect.any(GoodTask),
      terminalPresenter: {
        configure: expect.any(Function),
        appendRealTimeDocument: expect.any(Function),
        clearRealTimeDocuments: expect.any(Function),
        clearScreen: expect.any(Function),
        captureConsole: expect.any(Function),
        prependRealTimeDocument: expect.any(Function),
        present: expect.any(Function),
        printString: expect.any(Function),
        printDocument: expect.any(Function),
        releaseConsole: expect.any(Function),
        removeRealTimeDocument: expect.any(Function),
        restore: expect.any(Function),
        updateRealTimeDocument: expect.any(Function),
        OPTIONS: expect.any(Object)
      }
    })
    expect(GoodTask.iWasExecuted).toEqual(true)
    expect(GoodModule.iWasPrepared).toEqual(true)
    expect(GoodModule.iWasReleased).toEqual(true)
  })
})
