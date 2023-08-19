export const moduleNameMapper = {
  '^@/(.*)$': '<rootDir>/$1',
  '^~/(.*)$': '<rootDir>/$1',
  '^vue$': 'vue/dist/vue.common.js',
};
export const moduleFileExtensions = ['ts', 'js', 'vue', 'json'];
export const transform = {
  '^.+\\.ts$': 'ts-jest',
  '^.+\\.js$': 'babel-jest',
  '.*\\.(vue)$': 'vue-jest',
};
export const collectCoverage = true;
export const collectCoverageFrom = [
  '<rootDir>/components/**/*.vue',
  '<rootDir>/pages/**/*.vue',
];
export const testEnvironment = 'jsdom';
