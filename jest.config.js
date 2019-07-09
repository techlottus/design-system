module.exports = {
  "globals": {
    "ts-jest": {
      "diagnostics": {
        "ignoreCodes": [151001]
      }
    }
  },
  "roots": [
    "<rootDir>/tests"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"],
  "transformIgnorePatterns": [
    '/node_modules/',
  ],
}