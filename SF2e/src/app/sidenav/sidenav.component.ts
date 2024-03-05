import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    <section class="header">
      <section class="left-section">
        <button class="button-menu" (click)="toggleMenuIcon(menuIcon)">
          <div class="menu-icon" #menuIcon>
            <div class="bar-menu-1"></div>
            <div class="bar-menu-2"></div>
            <div class="bar-menu-3"></div>
          </div>
        </button>
        <div>
            <img class="sf2e-fr-logo-header" src="assets/logos/SF2e-FR-logo.png" alt="logo starfinder FR">
        </div>
        <span class="title-header" >SF2e PLAYTEST - Traduction FR</span>
      </section>
      <section class="middle-section">
        <input class="searchbar" type="text" placeholder="Search...">
        <button tooltip="Search" class="button-search">
        <img class="search-icon" src="assets/icons/captain-concierge.png" alt="search icon">
        <div class="tooltip">Search</div>
        </button>
      </section>
      <section class="right-section">
<!--
        <button class="button-login">
          <img class="login-icon" src="assets/icons/login-icon.jpg">
        </button>
-->
      </section>
    </section>
    <nav class="sidebar" *ngIf="isSidebarVisible">>
      <div class="sidebar-menu">Paizoblog:traductions</div>
      <div class="sidebar-menu" (click)="toggleSubMenu('submenu1')" [class.active]="isSubMenuActive('submenu1')">Création de personnage</div>
        <div class="sidebar-submenu" *ngIf="subMenuOpen === 'submenu1'">
          <a class="sidebar-submenu-item">Classes</a>
          <a class="sidebar-submenu-item">Ascendances</a>
          <a class="sidebar-submenu-item">Héritages</a>
        </div>
      <div class="sidebar-menu" (click)="toggleSubMenu('submenu2')" [class.active]="isSubMenuActive('submenu2')">Équipement</div>
        <div class="sidebar-submenu" *ngIf="subMenuOpen === 'submenu2'">
          <a class="sidebar-submenu-item">Armes</a>
          <a class="sidebar-submenu-item">Armures</a>
        </div>
    </nav>
  `,
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  isMenuOpen: boolean = false;
  isSidebarVisible: boolean = true;
  subMenuOpen: string | null = null;

  constructor() { }


  toggleMenuIcon(menuicon: HTMLElement): void {
    menuicon.classList.toggle('change');
    this.isMenuOpen = !this.isMenuOpen;
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  toggleSubMenu(subMenuName: string): void {
    if (this.subMenuOpen === subMenuName) {
      this.subMenuOpen = null;
    } else {
      this.subMenuOpen = subMenuName;
    }
  }

  isSubMenuActive(subMenuName: string): boolean {
    return this.subMenuOpen === subMenuName;
  }
}
