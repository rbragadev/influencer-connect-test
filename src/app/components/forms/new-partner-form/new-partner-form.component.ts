import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Partners } from 'src/app/Partners.Interface';

@Component({
  selector: 'app-new-partner-form',
  templateUrl: './new-partner-form.component.html',
  styleUrls: ['./new-partner-form.component.css'],
})
export class NewPartnerFormComponent implements OnInit {
  createPartnerForm!: FormGroup<any>;
  partner_avatar?: File;

  @Output() onSubmit = new EventEmitter<Partners>();
  @Input() btnText!: string;

  ngOnInit(): void {
    this.createPartnerForm = new FormGroup({
      partner_id: new FormControl(''),
      partner_level_id: new FormControl(''),
      creation_date: new FormControl(''),
      partner_first_name: new FormControl('', [Validators.required]),
      partner_last_name: new FormControl(''),
      partner_cpf_number: new FormControl(''),
      partner_email: new FormControl(''),
      partner_phone: new FormControl(''),
      partner_password: new FormControl(''),
      partner_status: new FormControl(''),
      partner_adress_street_name: new FormControl(''),
      partner_adress_street_number: new FormControl(''),
      partner_adress_street_complement: new FormControl(''),
      partner_adress_neighborhood: new FormControl(''),
      partner_adress_city: new FormControl(''),
      partner_adress_state: new FormControl(''),
      partner_adress_country: new FormControl(''),
      partner_adress_postal_code: new FormControl(''),
      partner_avatar: new FormControl(''),
    });
  }

  get partner_first_name() {
    return this.createPartnerForm.get('partner_first_name')!;
  }

  get partner_last_name() {
    return this.createPartnerForm.get('partner_last_name')!;
  }

  onAvatarSelected(event: any) {
    const partner_avatar: File = event.target.files[0];

    this.createPartnerForm.patchValue({
      partner_avatar: event.target.files[0],
    });
  }

  submit() {
    if (this.createPartnerForm.invalid) {
      return;
    }
    console.log(this.createPartnerForm.value);

    this.onSubmit.emit(this.createPartnerForm.value);
  }
}
