## Playwright

Running a tests.

Create the the script in package.json

```json
  "scripts": {
     "test": "playwright test --headed"
  },
```
You can now run tests with.

```bash
npm run test
```
## Notes

1. When you have multiple tests, the tests runs in parallel.
2. You can skip a test by adding .skip i.e test.skip
3. If a locator does not exist, the test will fail. but the error will not be informative. 
4. You would need to use the waitfor for the test to be informative.

