/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

import type { InitialOptionsTsJest } from 'ts-jest/dist/types';
import { jsWithTs as tsjPreset } from 'ts-jest/presets'

const config: InitialOptionsTsJest = {
  rootDir: '.',
  preset: "ts-jest",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  transform: {
    ...tsjPreset.transform
  },
  globals: {
    'ts-jest': {
      tsconfig: "<rootDir>/src/tests-config/tsconfig.json",
      compiler: "typescript"
    }
  },
  setupFilesAfterEnv: [
    "<rootDir>/test.setup.ts"
  ],
  testEnvironment: "jsdom",
  modulePathIgnorePatterns: [
    "<rootDir>/lib",
    "<rootDir>/node_modules"
  ]
}

export default config;