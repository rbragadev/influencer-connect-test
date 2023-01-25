import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Partners } from 'src/app/Partners.Interface';
import { PartnersService } from 'src/app/services/partners.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-partner-form',
  templateUrl: './new-partner-form.component.html',
  styleUrls: ['./new-partner-form.component.css'],
})
export class NewPartnerFormComponent implements OnInit {
  createPartnerForm!: FormGroup<any>;
  formulario!: FormGroup;

  //@Output() onSubmit = new EventEmitter<Partners>();
  //@Input() btnText!: string;
  @Input() partnerData: Partners | null = null;

  constructor(
    private partnersService: PartnersService,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      partner_first_name: [null, Validators.required],
      partner_last_name: [null],
      partner_email: [null],
      partner_cpf_number: [null],
      partner_phone: [null],
      partner_password: [null],
      partner_status: [null],
      partner_address_street_name: [null],
      partner_address_street_number: [null],
      partner_address_street_complement: [null],
      partner_address_city: [null],
      partner_address_state: [null],
      partner_address_country: [null],
      partner_address_postal_code: [null],
      partner_avatar: [null],
      partner_level_id: [null],
      partner_address_neighborhood: [null],
      creation_date: [null],
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.httpClient
      .post(
        'http://localhost:3000/influencer-connect/partner',
        JSON.stringify(this.formulario.value)
      )
      .pipe(map((data) => data))
      .subscribe(
        (data) => {
          console.log(data);
          this.formulario.reset();
        },
        (error: any) => alert('erro')
      );
  }

  resetar() {
    this.formulario.reset();
  }
}
