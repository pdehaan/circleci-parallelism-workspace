import { test, expect } from '@playwright/test';

const TEST_COUNT = 300;
const SKIP_PCT = 1;
const FAIL_PCT = 5;

test.describe.configure({ mode: 'parallel' });

test.describe("three", () => {
  for (let i = 1; i <= TEST_COUNT; i++) {
    test(`test three.${i}`, async ({ page }, testInfo) => {
      test.skip(Math.random() * 100 < SKIP_PCT, `SKIP ${testInfo.title}`);
      test.fail(Math.random() * 100 < FAIL_PCT, `FAIL ${testInfo.title}`);
      await page.waitForTimeout(Math.random() * .100);
      expect(i).toBeTruthy();
    });
  }
});
