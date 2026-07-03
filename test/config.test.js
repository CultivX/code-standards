import assert from 'node:assert/strict'
import path from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

import { ESLint } from 'eslint'

const dir = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(dir, '..')
const configFile = path.join(root, 'config', 'eslint.config.js')

// A fresh ESLint instance per call so we surface any config/plugin load error.
const lint = (relFile) => {
  const eslint = new ESLint({ cwd: root, overrideConfigFile: configFile })
  return eslint.lintFiles([path.join(dir, 'fixtures', relFile)])
}

// Guards against the classic upgrade trap: a dependency bump (e.g. ESLint 10)
// that no longer supports a plugin, causing rule loading to throw. lintFiles
// rejects in that case, so simply reaching an assertion proves the whole
// plugin set loaded and executed.
test('the shared config loads and every plugin executes', async () => {
  const results = await lint('bad.tsx')
  assert.equal(results.length, 1)

  const fatal = results[0].messages.filter((m) => m.fatal)
  assert.deepEqual(
    fatal,
    [],
    `unexpected fatal parse/plugin errors: ${JSON.stringify(fatal)}`
  )

  // No message should be an "unknown rule" report — that means a rule name in
  // the config no longer exists in the (upgraded) plugin.
  const unknownRule = results[0].messages.filter((m) =>
    /Definition for rule .* was not found/.test(m.message)
  )
  assert.deepEqual(
    unknownRule,
    [],
    `config references rules that no longer exist: ${JSON.stringify(unknownRule)}`
  )
})

test('rules from every plugin actually fire on bad code', async () => {
  const [result] = await lint('bad.tsx')
  const ruleIds = new Set(result.messages.map((m) => m.ruleId))

  for (const expected of [
    'no-debugger', // core
    '@typescript-eslint/no-unused-vars', // typescript-eslint
    'react/self-closing-comp', // eslint-plugin-react
  ]) {
    assert.ok(
      ruleIds.has(expected),
      `expected rule "${expected}" to report, saw: ${[...ruleIds].join(', ')}`
    )
  }
})

test('clean, well-formatted code passes with no errors', async () => {
  const [result] = await lint('clean.tsx')
  assert.equal(
    result.errorCount,
    0,
    `expected clean fixture to have no errors, got: ${JSON.stringify(result.messages)}`
  )
})
