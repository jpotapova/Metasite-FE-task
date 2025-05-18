import type { ContactProps } from "@common/contact";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
interface ContactCardProps {
  contact?: ContactProps;
}
export const ContactCard = ({ contact }: ContactCardProps) => {
  console.log(contact);
  return (
    <Card>
      <CardMedia
        sx={{ height: 183 }}
        image="https://picsum.photos/328/183"
        title="green iguana"
      />
      <CardContent>
        <h1>Lizard</h1>
        <p>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </p>
      </CardContent>
    </Card>
  );
};
