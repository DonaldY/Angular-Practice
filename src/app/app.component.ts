import { Component, OnInit } from '@angular/core';
import { animation } from '@angular/animations';
import { routeAnimations } from './core/animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {

  logo = '';
  languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he'];
  navigation = [
    { link: 'about', label: 'anms.menu.about' },
    { link: 'features', label: 'anms.menu.features' },
    { link: 'examples', label: 'anms.menu.examples' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'anms.menu.settings' }
  ];

  constructor(  ) {}

  ngOnInit() {  }

  onLoginClick() {
    // this.store.dispatch(new ActionAuthLogin());
  }

  onLogoutClick() {
    // this.store.dispatch(new ActionAuthLogout());
  }

  onLanguageSelect({ value: language }) {
    // this.store.dispatch(new ActionSettingsChangeLanguage({ language }));
  }
}
