import { CoreConfig, execTask, runApp, runBare } from '@universal-packages/core'

import './globals'

const JEST_CORE = {
  args: null,
  coreConfigOverride: null,
  processType: null,
  processName: null,
  stopFunction: null
}

global.jestCore = {
  execTask: async (name: string, directive?: string, directiveOptions?: string[], args?: Record<string, any>, coreConfigOverride?: CoreConfig): Promise<void> => {
    return execTask(name, directive, directiveOptions, args, coreConfigOverride)
  },
  runApp: (name: string, args?: Record<string, any>, coreConfigOverride?: CoreConfig): void => {
    JEST_CORE.processType = 'apps'
    JEST_CORE.processName = name
    JEST_CORE.args = args || {}
    JEST_CORE.coreConfigOverride = coreConfigOverride
  },
  runBare: (coreConfigOverride?: CoreConfig): void => {
    JEST_CORE.processType = 'bare'
    JEST_CORE.coreConfigOverride = coreConfigOverride
  }
}

beforeAll(async (): Promise<void> => {
  switch (JEST_CORE.processType) {
    case 'apps':
      JEST_CORE.stopFunction = await runApp(JEST_CORE.processName, JEST_CORE.args, false, JEST_CORE.coreConfigOverride)
      break
    case 'bare':
      JEST_CORE.stopFunction = await runBare(JEST_CORE.coreConfigOverride)
      break
  }
})

afterAll(async (): Promise<void> => {
  if (JEST_CORE.stopFunction) await JEST_CORE.stopFunction()
})
