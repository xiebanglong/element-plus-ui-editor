module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\.js$': 'babel-jest'
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'ts', 'tsx', 'node'],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  }
};
