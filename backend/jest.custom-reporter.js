class CustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
    this.testResults = [];
  }

  onRunComplete(contexts, results) {
    console.log('\n=== Test Execution Report ===\n');
    
    results.testResults.forEach(testFile => {
      testFile.testResults.forEach(test => {
        const status = test.status === 'passed' ? '✓' : '✗';
        const time = test.duration ? `(${test.duration}ms)` : '';
        console.log(`${status} ${test.title} ${time}`);
      });
    });

    console.log('\nTest Summary:');
    console.log(`Total Tests: ${results.numTotalTests}`);
    console.log(`Passed: ${results.numPassedTests}`);
    console.log(`Failed: ${results.numFailedTests}`);
    console.log(`Time: ${results.startTime - results.endTime}ms`);
  }
}

module.exports = CustomReporter; 