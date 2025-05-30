# Core Jest

[![npm version](https://badge.fury.io/js/@universal-packages%2Fcore-jest.svg)](https://www.npmjs.com/package/@universal-packages/core-jest)
[![Testing](https://github.com/universal-packages/universal-core-jest/actions/workflows/testing.yml/badge.svg)](https://github.com/universal-packages/universal-core-jest/actions/workflows/testing.yml)
[![codecov](https://codecov.io/gh/universal-packages/universal-core-jest/branch/main/graph/badge.svg?token=CXPJSN8IGL)](https://codecov.io/gh/universal-packages/universal-core-jest)

Jest tooling for [Universal Core](https://github.com/universal-packages/universal-core) testing.

## Install

```shell
npm install @universal-packages/core-jest

npm install @universal-packages/core
```

## Setup

Add the following to your `jest.config.js` or where you configure Jest:

```js
module.exports = {
  setupFilesAfterEnv: ['@universal-packages/core-jest']
}
```

## Jest Global

#### **`coreJest.runApp(name: string, [options: Object])`**

Run an app for all test cases in file and stop it after all tests are done.

```js
coreJest.runApp('web-server')

it('should return the todo list', async () => {
  const result = fetch('http://localhost:4000/todos')

  expect(result.json()).toEqual({ todos: [] })
})
```

#### Options

- **`args`** `Object`
  Arguments to pass to the app.
- **`coreConfigOverride`** `Object`
  Override the core config for the run.

#### **`coreJest.runBare([options: Object])`**

Load core modules and let them be available for code that can be tested without running an app or task.

```js
coreJest.runBare()

it('should be able to use global modules', async () => {
  const result = await MyService.doSomething()

  expect(result).toEqual('something')
})
```

#### Options

- **`coreConfigOverride`** `Object`
  Override the core config for the run.

#### **`coreJest.execTask(name: string, [options: Object])`**

Runs a task on the spot use this per test case that needs to test what the task did.

```js
it('should do something', async () => {
  await coreJest.execTask('maintain', 'deleted-users', ['fast'])

  expect(User.deleted().count()).toEqual(0)
})
```

#### Options

- **`args`** `Object`
  Arguments to pass to the task.

- **`directive`** `string`
  The directive to run the task with.

- **`directiveOptions`** `string[]`
  The directive options to run the task with.

- **`coreConfigOverride`** `Object`
  Override the core config for the run.

#### **`coreJest.abortTask()`**

Aborts the task that is currently running.

```js
it('should abort the task', async () => {
  coreJest.execTask('maintain', 'deleted-users', ['fast'])

  await coreJest.abortTask()

  expect(User.deleted().count()).toEqual(1)
})
```

#### **`coreJest.runInitializer(name: string, [options: Object])`**

Runs an initializer on the spot use this per test case that needs to test what the initializer did.

```js
it('should do something', async () => {
  await coreJest.runInitializer('library-initializer')

  expect(fs.existsSync('file.txt')).toEqual(true)
})
```

#### Options

- **`args`** `Object`
  Arguments to pass to the initializer.

- **`coreConfigOverride`** `Object`
  Override the core config for the run.

- **`locationOverride`** `string`
  Initializers are fetched from the `node_modules` folder by default. For testing this is change to the `,/src` folder. Since this is used for library development.

## Typescript

In order for typescript to see the global types you need to reference the types somewhere in your project, normally `./src/globals.d.ts`.

```ts
/// <reference types="@universal-packages/core-jest" />
```

This library is developed in TypeScript and shipped fully typed.

## Contributing

The development of this library happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving this library.

- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Contributing Guide](./CONTRIBUTING.md)

### License

[MIT licensed](./LICENSE).
