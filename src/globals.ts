import { ExecTaskOptions, RunAppOptions, RunBareOptions, RunInitializerOptions } from './types'

declare global {
  namespace coreJest {
    function execTask(name: string, options?: ExecTaskOptions): Promise<void>
    function runApp(name: string, options?: RunAppOptions): void
    function runBare(options?: RunBareOptions): void
    function runInitializer(name: string, options?: RunInitializerOptions): Promise<void>
  }
}

export {}
