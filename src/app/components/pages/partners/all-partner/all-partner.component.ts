import { Component, OnInit } from '@angular/core';

import { NewPartnersService } from 'src/app/services/partners.service';
import { Partners } from 'src/app/Partners.Interface';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-all-partner',
  templateUrl: './all-partner.component.html',
  styleUrls: ['./all-partner.component.css'],
})
export class AllPartnerComponent implements OnInit {
  allPartners: Partners[] = [];
  partners: Partners[] = [];
  baseApiUrl = environment.baseApiUrl;

  //todo search

  constructor(private newPartnerService: NewPartnersService) {}

  ngOnInit(): void {
    this.newPartnerService.getPartners().subscribe((items) => {
      const data = items.data;

      /*data.map((item) => {
        item.creation_date = new Date(item.creation_date).toLocaleDateString(
          'pt-BR'
        );
      });*/

      this.allPartners = data;
      this.partners = data;
      console.log(data);
    });
  }
}
