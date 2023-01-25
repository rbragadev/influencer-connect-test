export interface Partners {
  partner_id?: number;
  partner_level_id: number | string;
  creation_date: string | Date;
  partner_first_name: string;
  partner_last_name: string;
  partner_cpf_number: number;
  partner_email: string;
  partner_phone: number;
  partner_password: string;
  partner_status: string;
  partner_address_street_name: string;
  partner_address_street_number: number;
  partner_address_street_complement: string;
  partner_address_neighborhood: string;
  partner_address_city: string;
  partner_address_state: string;
  partner_address_country?: string;
  partner_address_postal_code: number;
  partner_avatar?: string;
}
export class ResponsePartner {
  partner_id?: number;
  partner_level_id?: number;
  creation_date?: string | Date;
  partner_first_name?: string;
  partner_last_name?: string;
  partner_cpf_number?: number;
  partner_email?: string;
  partner_phone?: number;
  partner_password?: string;
  partner_status?: string;
  partner_address_street_name?: string;
  partner_address_street_number?: number;
  partner_address_street_complement?: string;
  partner_address_neighborhood?: string;
  partner_address_city?: string;
  partner_address_state?: string;
  partner_address_country?: string;
  partner_address_postal_code?: number;
  partner_avatar?: string;
}

export interface PartnersEvolution {}
