import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) //registering routes
  ]
})
  .catch((err) => console.error(err));
