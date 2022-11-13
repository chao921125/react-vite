module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  // testMatch: [ // glob 格式
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[jt]s?(x)"
  // ],
  // 正则表达式格式，与 testMatch 互斥，不能同时声明
  testRegex: '(/__tests__/.*.(test|spec)).(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: false, // 配置测试覆盖率是否开启
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'], // 配置收集测试覆盖率文件范围
  coverageDirectory: '<rootDir>/coverage/', // 测试覆盖率输出形式目录
  coveragePathIgnorePatterns: ['(tests/.*.mock).(jsx?|tsx?)$', '(.*).d.ts$'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'identity-obj-proxy',
  },
  verbose: true,
  testTimeout: 30000,
}
