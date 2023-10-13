import { CoreConfig } from '@universal-packages/core'

declare global {
  namespace jestCore {
    function execTask(name: string, directive?: string, directiveOptions?: string[], args?: Record<string, any>, coreConfigOverride?: CoreConfig): Promise<void>
    function runApp(name: string, args?: Record<string, any>, coreConfigOverride?: CoreConfig): void
    function runBare(coreConfigOverride?: CoreConfig): void
  }
}

export {}
