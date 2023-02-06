export interface Partners {
  data?: any[];
  partner_id?: number;
  partner_level_id: number | string;
  creation_date: string | Date;
  partner_first_name: string;
  partner_last_name: string;
  partner_cpf_number: string;
  partner_email: string;
  partner_phone: string;
  partner_password: string;
  partner_status: string;
  partner_address_street_name: string;
  partner_address_street_number: string;
  partner_address_street_complement: string;
  partner_address_neighborhood: string;
  partner_address_city: string;
  partner_address_state: string;
  partner_address_country?: string;
  partner_address_postal_code: string;
  partner_avatar?: string;
}
export class ResponsePartner {
  data?: any[];
  partner_id?: number;
  partner_level_id?: number;
  creation_date?: string | Date;
  partner_first_name?: string;
  partner_last_name?: string;
  partner_cpf_number?: string;
  partner_email?: string;
  partner_phone?: string;
  partner_password?: string;
  partner_status?: string;
  partner_address_street_name?: string;
  partner_address_street_number?: string;
  partner_address_street_complement?: string;
  partner_address_neighborhood?: string;
  partner_address_city?: string;
  partner_address_state?: string;
  partner_address_country?: string;
  partner_address_postal_code?: string;
  partner_avatar?: string;
}

export interface PartnersEvolution {}
