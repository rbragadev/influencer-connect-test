import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Admin',
        icon: 'pi pi-fw pi-lock',
        items: [
          {
            label: 'Usuarios',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Adicionar',
                icon: 'pi pi-fw pi-user-plus',
              },
              {
                label: 'Editar',
                icon: 'pi pi-fw pi-user-edit',
              },
              {
                label: 'Desativar',
                icon: 'pi pi-fw pi-user-minus',
              },
            ],
          },
          {
            label: 'Redes Sociais',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Adicionar',
                icon: 'pi pi-fw pi-user-plus',
              },
              {
                label: 'Editar',
                icon: 'pi pi-fw pi-user-edit',
              },
              {
                label: 'Desativar',
                icon: 'pi pi-fw pi-user-minus',
              },
            ],
          },
          {
            label: 'Level de Partner',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Adicionar',
                icon: 'pi pi-fw pi-user-plus',
              },
              {
                label: 'Editar',
                icon: 'pi pi-fw pi-user-edit',
              },
              {
                label: 'Desativar',
                icon: 'pi pi-fw pi-user-minus',
              },
            ],
          },
          {
            separator: true,
          },
          {
            label: 'Niveis de Usuario',
            icon: 'pi pi-fw pi-lock',
          },
        ],
      },
      {
        label: 'Partners',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Nova Partner',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['new-partner'],
          },
          {
            label: 'Editar Partner',
            icon: 'pi pi-fw pi-user-edit',
          },
          {
            label: 'Desativar Partner',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'Pesquisar',
            icon: 'pi pi-fw pi-search',
            items: [
              {
                label: 'Todas as Partners',
                icon: 'pi pi-fw pi-filter',
                routerLink: ['all-partner'],
              },
              {
                label: 'Pesquisa por Id',
                icon: 'pi pi-fw pi-filter',
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'Todas Partners',
              },
            ],
          },
          {
            separator: true,
          },
          {
            label: 'Financeiro',
            icon: 'pi pi-fw pi-money-bill',
            items: [
              {
                label: 'Historico Financeiro',
                icon: 'pi pi-fw pi-info-circle',
              },
            ],
          },
        ],
      },
      {
        label: 'Publis',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Cadastrar Publis',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Editar Publis',
            icon: 'pi pi-fw pi-pencil',
          },
          {
            label: 'Deletar Publis',
            icon: 'pi pi-fw pi-minus',
          },
          {
            label: 'Arquivo',
            icon: 'pi pi-fw pi-calendar-times',
          },
        ],
      },
      {
        label: 'Logs',
        icon: 'pi pi-fw pi-info-circle',
        items: [
          {
            label: 'Partners',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Evolution Log',
                icon: 'pi pi-fw pi-info-circle',
              },
              {
                label: 'Social Network Log',
                icon: 'pi pi-fw pi-info-circle',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}
