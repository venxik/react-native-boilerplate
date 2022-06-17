describe('SignIn screen', () => {
  beforeAll(async () => {
    await device.launchApp({ permissions: { notifications: 'YES' } });
  });

  it('should have signin screen', async () => {
    await expect(element(by.id('signin-screen'))).toBeVisible();
  });

  it('can input values and show/hide password', async () => {
    await element(by.id('input-email')).typeText('this is email');
    await element(by.id('input-password')).typeText('this is password');
  });

  it('can show or hide password', async () => {
    await element(by.id('hide-password')).tap();
    await expect(element(by.id('icon-show'))).toBeVisible();
    await element(by.id('hide-password')).tap();
    await expect(element(by.id('icon-hide'))).toBeVisible();
  });

  it('can navigate to Home Screen', async () => {
    await element(by.id('btn-submit')).tap();
    await expect(element(by.id('home-screen'))).toBeVisible();
  });

  it('can navigate to Signup Screen', async () => {
    await device.reloadReactNative();
    await element(by.id('btn-signup')).tap();
    await expect(element(by.id('signup-screen'))).toBeVisible();
  });
});
