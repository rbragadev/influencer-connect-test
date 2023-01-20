import { Component } from '@angular/core';
import { Partners } from 'src/app/Partners.Interface';
import { NewPartnersService } from 'src/app/services/partners.service';

@Component({
  selector: 'app-new-partner',
  templateUrl: './new-partner.component.html',
  styleUrls: ['./new-partner.component.css'],
})
export class NewPartnerComponent {
  btnText = 'Enviar Cadastro';

  constructor(private newPartnerService: NewPartnersService) {}

  async createHandlrer(partners: Partners) {
    const formData = new FormData();

    formData.append('partner_first_name', partners.partner_first_name);
    formData.append('partner_last_name', partners.partner_last_name);

    if (partners.partner_avatar) {
      formData.append('partner_avatar', partners.partner_avatar);
    }

    //Todo

    await this.newPartnerService.createPartner(formData).subscribe();

    //Exibir mensagem

    //Redirect
  }
}
