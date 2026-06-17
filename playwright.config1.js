// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
    testDir: './tests',
    retries: 0,
    workers: 1,
    timeout: 40 * 1000,
    expect: {
        timeout: 40 * 1000,
    },

    reporter: 'html',
    projects: [
        {
            Name: 'chrome',
            use: {
                browserName: 'chromium',
                headless: false,
                screenshot: 'on',
                trace: 'on',
                video: 'retain-on-failure',
                ...devices['iPhone 11'],
                ignoreHTTPSErrors: true,

            }
        },
    ]


});
module.exports = config
