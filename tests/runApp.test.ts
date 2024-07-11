import '../src'
import GoodApp from './__fixtures__/Good.app'
import GoodModule from './__fixtures__/modules/Good.module'

coreJest.runApp('good-app')

describe(coreJest.runApp, (): void => {
  it('runs an app for this test suite', async (): Promise<void> => {
    expect(core).toEqual({
      App: GoodApp,
      appConfig: { good: true },
      appInstance: expect.any(GoodApp),
      coreConfig: expect.anything(),
      coreModules: { goodModule: expect.any(GoodModule) },
      developer: {
        bucket: {},
        terminalPresenter: {
          setProgressPercentage: expect.any(Function),
          increaseProgressPercentageBy: expect.any(Function),
          startProgressIncreaseSimulation: expect.any(Function),
          finishProgressIncreaseSimulation: expect.any(Function),
          setScriptOutput: expect.any(Function),
          setSubProcess: expect.any(Function),
          runSubProcess: expect.any(Function)
        }
      },
      environments: [],
      Initializer: null,
      initializerInstance: null,
      logger: expect.anything(),
      projectConfig: { 'good-app': { good: true } },
      stoppable: true,
      stopping: false,
      Task: null,
      taskInstance: null,
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
    expect(GoodApp.iWasPrepared).toEqual(true)
    expect(GoodApp.iWasRan).toEqual(true)
    expect(GoodModule.iWasPrepared).toEqual(true)
  })
})
