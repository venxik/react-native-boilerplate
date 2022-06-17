// beforeAll(async () => {
//   await detox.init(undefined, { launchApp: false });
//   await device.launchApp({
//     newInstance: true,
//     launchArgs: { DTXEnableVerboseSyncSystem: 'YES', DTXEnableVerboseSyncResources: 'YES' },
//   });
// });

beforeAll(async () => {
  await device.launchApp();
  // await device.disableSynchronization(); // tried with and without this line
});
