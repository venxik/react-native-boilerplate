describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
    });
    // await device.disableSynchronization(); // tried with and without this line
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  // it('should have splash screen', async () => {
  //   await device.disableSynchronization();
  //   await expect(element(by.id('splash-screen'))).toBeVisible();
  // });

  it('should have signin screen', async () => {
    await device.enableSynchronization();
    await waitFor(element(by.id('btn-submit')))
      .toBeVisible()
      .withTimeout(3000);
  });
});
