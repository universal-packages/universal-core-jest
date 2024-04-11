import '../src'
import GoodApp from './__fixtures__/Good.app'
import GoodModule from './__fixtures__/modules/Good.module'

jestCore.runBare()

describe(jestCore.runBare, (): void => {
  it('runs an app for this test suite', async (): Promise<void> => {
    expect(core).toEqual({
      App: null,
      appConfig: null,
      appInstance: null,
      coreConfig: expect.anything(),
      coreModules: { goodModule: expect.any(GoodModule) },
      developer: {
        updateTaskProgress: expect.any(Function),
        bucket: {}
      },
      environments: [],
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
    expect(GoodApp.iWasPrepared).toEqual(false)
    expect(GoodApp.iWasRan).toEqual(false)
    expect(GoodModule.iWasPrepared).toEqual(true)
  })
})
