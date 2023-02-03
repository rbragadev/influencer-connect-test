import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PartnersService } from 'src/app/services/partners.service';
import { Partners, ResponsePartner } from 'src/app/Partners.Interface';
import { environment } from 'src/app/environments/environment';
import { first, switchMap, tap } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css'],
})
export class PartnerComponent implements OnInit {
  partners: any = [];
  baseApiUrl = environment.API;
  items!: MenuItem[];

  constructor(
    private partnersService: PartnersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items = [
      { label: 'Resumo', icon: 'pi pi-home' },
      { label: 'Perfil de Beleza', icon: 'pi pi-users' },
      { label: 'Areas', icon: 'pi pi-search' },
      { label: 'Dados Cadastrais', icon: 'pi pi-user' },
      { label: 'Logs', icon: 'pi pi-exclamation-circle' },
      { label: 'Configurações', icon: 'pi pi-cog' },
    ];

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.partnersService
      .getPartner(id)
      .pipe(first())
      .subscribe((data) => {
        this.partners = data;
        console.log(this.partners);
        console.log(id);
      });
  }

  //TODO*****************************************
  //Make soft delete method
  removeHandler(id: number) {
    this.partnersService
      .removePartner(id)
      .pipe(
        tap(() => console.log('testando')),
        switchMap(() => this.router.navigate(['/']))
      )
      .subscribe();
  }
  //TODO***************************************
}
