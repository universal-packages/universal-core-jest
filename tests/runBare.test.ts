import { TerminalPresenter } from '@universal-packages/terminal-presenter'

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
      environments: [],
      logger: expect.anything(),
      projectConfig: { 'good-app': { good: true } },
      stoppable: true,
      stopping: false,
      Task: null,
      taskInstance: null,
      TerminalPresenter: TerminalPresenter
    })
    expect(GoodApp.iWasPrepared).toEqual(false)
    expect(GoodApp.iWasRan).toEqual(false)
    expect(GoodModule.iWasPrepared).toEqual(true)
  })
})
