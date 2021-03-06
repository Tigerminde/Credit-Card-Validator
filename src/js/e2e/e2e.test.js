import puppetteer from 'puppeteer';

jest.setTimeout(30000);
describe('Validate card form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  describe('Validate card form', () => {
    test('add .valid', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[class=valid-card]');
      const input = await form.$('[id=input]');
      await input.type('5404362761210413');
      const submit = await form.$('[id=btn-validate]');
      submit.click();
      await page.waitForSelector('[id=input].valid');
    });

    test('add .invalid', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[class=valid-card]');
      const input = await form.$('[id=input]');
      await input.type('5404362761210413');
      const submit = await form.$('[id=btn-validate]');
      submit.click();
      await page.waitForSelector('[id=input].invalid');
    });
  });
});
