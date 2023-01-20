import { Component, OnInit } from '@angular/core';

import { PartnersService } from 'src/app/services/partners.service';
import { Partners } from 'src/app/Partners.Interface';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-all-partner',
  templateUrl: './all-partner.component.html',
  styleUrls: ['./all-partner.component.css'],
})
export class AllPartnerComponent implements OnInit {
  partners: any = [];
  baseApiUrl = environment.baseApiUrl;

  //todo search

  constructor(public partnersService: PartnersService) {}

  ngOnInit(): void {
    this.getAllPartners();
  }

  getAllPartners() {
    this.partnersService.getAllPartners().subscribe((data) => {
      this.partners = data;
      console.log(this.partners);
    });

    /* this.newPartnerService.getPartners().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.creation_date = new Date(item.creation_date).toLocaleDateString(
          'pt-BR'
        );
      });

      this.allPartners = data;
      this.partners = data;
      console.log(data);
    });*/
  }
}
