module.exports = {
  "globals": {
    "ts-jest": {
      "diagnostics": {
        "ignoreCodes": [151001],
      },
    },
  },
  "roots": [
    "<rootDir>/__tests__/unit",
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
  },
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFilesAfterEnv": ["<rootDir>/__tests__/setupEnzyme.ts"],
  "transformIgnorePatterns": [
    '/node_modules/',
  ],
};
