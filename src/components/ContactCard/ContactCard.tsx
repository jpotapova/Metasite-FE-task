import type { ContactProps } from "@common/contact";

interface ContactCardProps {
  contact?: ContactProps;
}
export const ContactCard = ({ contact }: ContactCardProps) => {
  if (!contact) {
    return null;
  }
  return <div>{contact.displayName}</div>;
};
