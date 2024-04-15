// @ts-check
import { test, expect } from '@playwright/test';

const CAT_PREFIX_IMAGEN_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows randow fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // Qué va hacer (Promesas)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text. textContent()
  const imageSrc = await image.getAttribute('src')

  console.log({ textContent, imageSrc })
  await expect(textContent ?.length).toBeGreaterThan(0)
  await expect(imageSrc ?.startsWith (CAT_PREFIX_IMAGEN_URL)).toBeTruthy()
})


/*test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/
