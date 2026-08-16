import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { BookMarked, LucideAngularModule, Tag, User } from 'lucide-angular';
LucideAngularModule.pick({
  BookMarked,
  User,
  Tag
});
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
