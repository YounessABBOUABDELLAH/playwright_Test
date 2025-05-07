import { test, expect, chromium } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('accès au site protégé par mot de passe', async () => {
  const browser = await chromium.launch({ headless: false }); // headless: false pour voir le navigateur
  const page = await browser.newPage();

  // Aller sur le site
  await page.goto('https://develop--jel-poker.netlify.app/fr');
  
  // Remplir le champ mot de passe
  await page.locator('[name="password"]').fill("GlbJel2024Netlify");

  // Cliquer sur le bouton de soumission
  await page.getByRole("button", { name: "Submit" }).click();
  
  // Attendre que la page réelle se charge (attente du changement d'état)
  await page.waitForLoadState('load');
  
  // Optionnel : Vérifier que le titre de la page est bien celui attendu après connexion
  await expect(page).toHaveTitle(/Barrière Online/);
  await page.getByRole("button", { name: "Agree and close" }).click(); // Adapte selon le vrai titre de la page après connexion
  await page.getByRole('link', { name: 'S\'inscrire' }).click(); // Le lien dont le texte visible est "Contact"
  await page.waitForLoadState('load');
  await page.locator('[data-testid="email-input"]').fill('abouabdellahyouness@email.com');
  await page.waitForLoadState('load');


  await page.locator('[id="password"]').fill('Youness.2001@24');
  await page.waitForLoadState('load');
  await page.locator('[data-testid="cguOnline"]').click();
  await page.waitForLoadState('load'); 

  await page.locator('[data-testid="submit-signup-form"]').click();
  await page.waitForLoadState('load');

  await page.getByText('Monsieur').click();
  await page.waitForLoadState('load');
  await page.locator('[id="firstNames"]').fill('ABOUABDELLAH');
  await page.locator('[id="birthLastName"]').fill('Youness');
  await page.locator('[id="birthDate"]').fill('21/01/2000');
  
  // await page.locator('[data-testid="ask-civility-form-submit-button"]').click();
  // const btn = page.locator('[data-testid="ask-civility-form-submit-button"]');
  // console.log("▶️ Visible :", await btn.isVisible());
  // console.log("✅ Enabled :", await btn.isEnabled());
  await page.locator('//span[@class="flex items-center justify-center gap-2 visible"]').waitFor();
  await expect(locator('//span[@class="flex items-center justify-center gap-2 visible"]')).toBeEnable()
  await page.locator('//span[@class="flex items-center justify-center gap-2 visible"]').click()
  
  await page.locator('[data-testid="close-icon-svg"]').click();

  // .click({timeout: 5000} )
  
  await page.pause();


  
});
