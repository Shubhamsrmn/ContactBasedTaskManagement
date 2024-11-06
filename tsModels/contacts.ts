export interface Contacts {
  contacts: Contact[];
}

export interface Contact {
  id: string;
  name: string;
  number: string;
  email: string | null;
  updated_at: string;
  created_at: string;
}
