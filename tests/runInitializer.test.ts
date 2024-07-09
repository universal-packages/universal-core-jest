import '../src'
import GoodInitializer from './__fixtures__/Good.universal-core-initializer'

describe(coreJest.runInitializer, (): void => {
  it('runs an the specified initializer', async (): Promise<void> => {
    await coreJest.runInitializer('good-initializer', { locationOverride: './tests/__fixtures__' })
    expect(core).toEqual({
      App: null,
      appConfig: null,
      appInstance: null,
      coreConfig: expect.anything(),
      coreModules: null,
      developer: {
        updateProgress: expect.any(Function),
        bucket: {}
      },
      environments: null,
      Initializer: GoodInitializer,
      initializerInstance: expect.any(GoodInitializer),
      logger: expect.anything(),
      projectConfig: null,
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
    expect(GoodInitializer.iWasInitialized).toEqual(true)
  })
})
