import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  navItems = [
    {label: 'Home', link: '/'},
    {label: 'Über mich', link: '/about-me'},
    {label: 'Fähigkeiten', link: '/skills'}
  ];
  showMenu = false;

  toggleMenu() {
    let ele: any = document.querySelector('.hamburg');
    if(this.showMenu) {
      ele.classList.remove('checked');
    } else {
      ele.classList.add('checked');
    }
    this.showMenu = !this.showMenu;
  }

}
