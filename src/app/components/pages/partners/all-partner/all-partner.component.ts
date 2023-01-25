import { Component, OnInit } from '@angular/core';

import { PartnersService } from 'src/app/services/partners.service';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-all-partner',
  templateUrl: './all-partner.component.html',
  styleUrls: ['./all-partner.component.css'],
})
export class AllPartnerComponent implements OnInit {
  baseApiUrl = environment.baseApiUrl;

  allPartners: any = []; //Datas used in Method for filter
  partners: any = []; //Main Array of component

  searchTerm: string = '';

  constructor(public partnersService: PartnersService) {}

  ngOnInit(): void {
    this.getAllPartners();
  }

  getAllPartners() {
    this.partnersService.getPartners().subscribe((data) => {
      this.partners = data;
      this.allPartners = data;
      console.log(this.partners);
    });
  }

  //Todo Search
  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.partners = this.allPartners.filter(
      (partner: { partner_first_name: string }) => {
        return partner.partner_first_name.toLowerCase().includes(value);
      }
    );
  }
}
