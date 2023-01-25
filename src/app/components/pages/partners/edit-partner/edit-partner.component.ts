import { Component, OnInit } from '@angular/core';
import { PartnersService } from 'src/app/services/partners.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { first } from 'rxjs';
import { Partners } from 'src/app/Partners.Interface';

@Component({
  selector: 'app-edit-partner',
  templateUrl: './edit-partner.component.html',
  styleUrls: ['./edit-partner.component.css'],
})
export class EditPartnerComponent implements OnInit {
  //Array de dados
  partners: any = [];
  //Variaveis de formulario
  btnText: string = 'Editar';

  constructor(
    private partnersService: PartnersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
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

  async editHandler(partnerData: Partners) {
    const id = this.partners.partner_id;
    const formData = new FormData();

    formData.append('first_name', partnerData.partner_first_name);

    if (partnerData.partner_avatar) {
      formData.append('avatar', partnerData.partner_avatar);
    }

    await this.partnersService.updatePartner(id, formData).subscribe();
    console.log(formData);
    //this.router.navigate(['/']);
  }
}
