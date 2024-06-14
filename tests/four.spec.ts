import { test, expect } from '@playwright/test';

const TEST_COUNT = 400;
const SKIP_PCT = 3;
const FAIL_PCT = 3;

test.describe.configure({ mode: 'parallel' });

for (let i = 1; i <= TEST_COUNT; i++) {
  test(`test four.${i}`, async ({ page }, testInfo) => {
    test.skip(Math.random() * 100 < SKIP_PCT, `SKIP ${testInfo.title}`);
    test.fail(Math.random() * 100 < FAIL_PCT, `FAIL ${testInfo.title}`);
    await page.waitForTimeout(Math.random() * .200);
    expect(i).toBeTruthy();
  });
}
