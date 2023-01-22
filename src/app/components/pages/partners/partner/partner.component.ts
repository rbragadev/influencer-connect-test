import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PartnersService } from 'src/app/services/partners.service';
import { Partners, ResponsePartner } from 'src/app/Partners.Interface';
import { environment } from 'src/app/environments/environment';
import { first } from 'rxjs';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css'],
})
export class PartnerComponent implements OnInit {
  partners: any = [];
  baseApiUrl = environment.baseApiUrl;

  constructor(
    private partnersService: PartnersService,
    private route: ActivatedRoute
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
}
