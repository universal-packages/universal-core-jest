import { RunBareOptions, execTask, runApp, runBare } from '@universal-packages/core'

import './globals'
import { ExecTaskOptions, RunAppOptions } from './types'

const JEST_CORE = {
  options: null,
  processType: null,
  processName: null,
  stopFunction: null
}

global.jestCore = {
  execTask: async (name: string, options?: ExecTaskOptions): Promise<void> => {
    return execTask(name, { ...options, exitType: 'throw' })
  },
  runApp: (name: string, options?: RunAppOptions): void => {
    JEST_CORE.processType = 'apps'
    JEST_CORE.processName = name
    JEST_CORE.options = options
  },
  runBare: (options?: RunBareOptions): void => {
    JEST_CORE.processType = 'bare'
    JEST_CORE.options = options
  }
}

beforeAll(async (): Promise<void> => {
  switch (JEST_CORE.processType) {
    case 'apps':
      JEST_CORE.stopFunction = await runApp(JEST_CORE.processName, { ...JEST_CORE.options, exitType: 'throw' })
      break
    case 'bare':
      JEST_CORE.stopFunction = await runBare({ ...JEST_CORE.options, exitType: 'throw' })
      break
  }
})

afterAll(async (): Promise<void> => {
  if (JEST_CORE.stopFunction) await JEST_CORE.stopFunction()
})
