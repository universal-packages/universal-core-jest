import { RunBareOptions, execTask, runApp, runBare, runInitializer } from '@universal-packages/core'

import './globals'
import { ExecTaskOptions, RunAppOptions, RunInitializerOptions } from './types'

const CORE_JEST = {
  options: null,
  processType: null,
  processName: null,
  stopFunction: null
}

global.coreJest = {
  execTask: async (name: string, options?: ExecTaskOptions): Promise<void> => {
    CORE_JEST.processType = 'task'
    CORE_JEST.processName = name
    CORE_JEST.options = options

    await execTask(name, { ...options, exitType: 'throw' })

    process.removeAllListeners()
  },
  runApp: (name: string, options?: RunAppOptions): void => {
    CORE_JEST.processType = 'apps'
    CORE_JEST.processName = name
    CORE_JEST.options = options
  },
  runBare: (options?: RunBareOptions): void => {
    CORE_JEST.processType = 'bare'
    CORE_JEST.options = options
  },
  runInitializer: async (name: string, options?: RunInitializerOptions): Promise<void> => {
    CORE_JEST.processType = 'initializer'
    CORE_JEST.processName = name
    CORE_JEST.options = options

    jest.mock('@universal-packages/template-populator')

    await runInitializer(name, { locationOverride: './src', ...options, exitType: 'throw' })

    process.removeAllListeners()
  }
}

beforeAll(async (): Promise<void> => {
  switch (CORE_JEST.processType) {
    case 'apps':
      CORE_JEST.stopFunction = await runApp(CORE_JEST.processName, { ...CORE_JEST.options, exitType: 'throw' })
      break
    case 'bare':
      CORE_JEST.stopFunction = await runBare({ ...CORE_JEST.options, exitType: 'throw' })
      break
  }
})

afterAll(async (): Promise<void> => {
  if (CORE_JEST.stopFunction) await CORE_JEST.stopFunction()
})
