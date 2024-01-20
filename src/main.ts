import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(async () => {
    await setInitialOpacity();
  })
  .catch(err => console.error(err));

async function setInitialOpacity(): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      let bodyElement = document.getElementsByTagName('body')[0];
      bodyElement.setAttribute('style', 'opacity: 1.0;');
  
      resolve();
    } catch(error: any) {
      console.error(`Error on set initial opacity value: ${error}`);

      reject(error);
    }
  });
}