export type JSTransformer = 'esbuild' | 'swc' | 'ts-jest';

function getJSTransformer(jsTransformer: JSTransformer) {
  switch (jsTransformer) {
    case 'esbuild':
      return require.resolve('esbuild-jest');
    case 'swc':
      return require.resolve('@swc-node/jest');
    case 'ts-jest':
      return require.resolve('ts-jest');
    default:
      throw new Error(`Unknown jsTransformer: ${jsTransformer}`);
  }
}

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  modulePathIgnorePatterns: [
    '<rootDir>/.tmp',
    '<rootDir>/examples',
    '<rootDir>/templates',
    '<rootDir>/packages/.+/compiled',
    '<rootDir>/packages/.+/fixtures',
  ],
  testMatch: ['**/*.test.(t|j)s(x)?'],
  transform: {
    '^.+\\.tsx?$': getJSTransformer('esbuild'),
  },
  testTimeout: 30000,
};

export default config;
