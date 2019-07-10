module.exports = {
  "globals": {
    "ts-jest": {
      "diagnostics": {
        "ignoreCodes": [151001]
      }
    }
  },
  "roots": [
    "<rootDir>/tests/unit"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFilesAfterEnv": ["<rootDir>/tests/setupEnzyme.ts"],
  "transformIgnorePatterns": [
    '/node_modules/',
  ],
}