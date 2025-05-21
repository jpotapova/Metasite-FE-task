import NoPhoto from "@assets/no-photo.png";
import UserProto from "@assets/user-photo.png";
import type { ContactProps } from "@common/contact";
import { useTheme } from "@common/Theme";
import { IndicatorProgress } from "@components/IndicatorProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { Message } from "./Message";
import { Row } from "./Row";
import { Title } from "./Title";

interface ContactCardProps {
  contact?: ContactProps;
  isLoading: boolean;
  isError: boolean;
  isUninitialized: boolean;
}
export const ContactCard = ({
  contact,
  isLoading,
  isError,
  isUninitialized,
}: ContactCardProps) => {
  const theme = useTheme();

  return (
    <Card>
      <CardMedia
        sx={{ height: 183 }}
        image={contact ? UserProto : NoPhoto}
        title={
          contact ? `Picture of ${contact.displayName}` : "Placeholder image"
        }
      />
      <CardContent style={{ height: 164 }}>
        {isLoading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <IndicatorProgress />
          </div>
        )}
        {isUninitialized && (
          <Message>Select a row on the left to see the details.</Message>
        )}
        {isError && <Message>There was an error loading the contact.</Message>}
        {contact && !isLoading && !isError && (
          <div>
            <Title>{contact.displayName}</Title>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: "fit-content" }}>
                <Row label="Name" value={contact.displayName} />
                <Row label="City" value={contact.city} />
                <Row
                  label="Email"
                  value={
                    <a
                      href={`mailto:${contact.email}`}
                      style={{
                        color: theme.palette.contactify.backgroundLight,
                      }}
                    >
                      {contact.email}
                    </a>
                  }
                />
                <Row label="Phone" value={contact.phone} />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
