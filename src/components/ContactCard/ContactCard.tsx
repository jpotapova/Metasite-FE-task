interface ContactCardProps {
  contact?: {
    name: string;
  };
}
export const ContactCard = ({ contact }: ContactCardProps) => {
  if (!contact) {
    return null;
  }
  return <div>{contact.name}</div>;
};
