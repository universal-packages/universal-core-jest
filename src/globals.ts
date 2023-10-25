import { ExecTaskOptions, RunAppOptions, RunBareOptions } from './types'

declare global {
  namespace jestCore {
    function execTask(name: string, options?: ExecTaskOptions): Promise<void>
    function runApp(name: string, options?: RunAppOptions): void
    function runBare(options?: RunBareOptions): void
  }
}

export {}
