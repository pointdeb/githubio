import { SocialContact } from './social-contact';
export interface User {
  firstName: string;
  lastName: string;
  picture: string;
  slogan: string;
  contacts: SocialContact[];
}
