import { CoreConfig } from '@universal-packages/core'

export interface ExecTaskOptions {
  args?: Record<string, any>
  coreConfigOverride?: CoreConfig
  directive?: string
  directiveOptions?: string[]
}

export interface RunAppOptions {
  args?: Record<string, any>
  coreConfigOverride?: CoreConfig
}

export interface RunBareOptions {
  coreConfigOverride?: CoreConfig
}

export interface RunInitializerOptions {
  args?: Record<string, any>
  coreConfigOverride?: CoreConfig
  locationOverride?: string
}
