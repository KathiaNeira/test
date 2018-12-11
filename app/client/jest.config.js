const {defaults} = require('jest-config');

module.exports =   {
    setupFiles: [
        //"<rootDir>/config/jest/test-shim",
        // "<rootDir>/config/jest/test-setup",
        //"jest-localstorage-mock"
    ],
    verbose: true,
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: [
      '**/src/**.(test|spec).(jsx|tsx|js|ts)'
    ],
    moduleFileExtensions: [
        ...defaults.moduleFileExtensions,
        'ts',
        'tsx'
    ],
    moduleNameMapper: {
      "^@app/(.*)": "<rootDir>/$1"
    },
    testEnvironment: 'node'
}