import type { ContactProps } from "@common/contact";
import { useTheme } from "@common/Theme";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
interface ContactCardProps {
  contact?: ContactProps;
}
export const ContactCard = ({ contact }: ContactCardProps) => {
  console.log(contact);
  const theme = useTheme();

  return (
    <Card>
      <CardMedia
        sx={{ height: 183 }}
        image="https://picsum.photos/328/183"
        title="green iguana"
      />
      <CardContent>
        <h1
          style={{
            marginTop: 0,
            marginBottom: theme.spacing(2),
            textAlign: "center",
            fontSize: 24,
          }}
        >
          Lizard
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: theme.palette.contactify.secondary,
            fontSize: 12,
          }}
        >
          <div style={{ width: "fit-content" }}>
            <div style={{ display: "flex", gap: theme.spacing(4) }}>
              <div style={{ textAlign: "right", width: theme.spacing(6) }}>
                Name:
              </div>
              <div>Anthony H.</div>
            </div>
            <div style={{ display: "flex", gap: theme.spacing(4) }}>
              <div style={{ textAlign: "right", width: theme.spacing(6) }}>
                City:
              </div>
              <div>Los Angeles</div>
            </div>
            <div style={{ display: "flex", gap: theme.spacing(4) }}>
              <div style={{ textAlign: "right", width: theme.spacing(6) }}>
                Email:
              </div>
              <div>hello@gmail.com</div>
            </div>
            <div style={{ display: "flex", gap: theme.spacing(4) }}>
              <div style={{ textAlign: "right", width: theme.spacing(6) }}>
                Phone:
              </div>
              <div>+334 34234 2423423</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
