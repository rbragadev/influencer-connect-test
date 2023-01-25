import { Component } from '@angular/core';
import { Partners } from 'src/app/Partners.Interface';
import { PartnersService } from 'src/app/services/partners.service';

@Component({
  selector: 'app-new-partner',
  templateUrl: './new-partner.component.html',
  styleUrls: ['./new-partner.component.css'],
})
export class NewPartnerComponent {
  btnText = 'Enviar Cadastro';

  constructor(private PartnerService: PartnersService) {}
}
