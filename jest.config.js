module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  modulePathIgnorePatterns: ["/src/index.tsx"],
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },
};
