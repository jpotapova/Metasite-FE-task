import { useTheme } from "@common/Theme";
import { ErrorMessage } from "@components/ErrorMessage";
import { MaxWidthContainer } from "@components/MaxWidthContainer";

export const LoadingError = () => {
  const theme = useTheme();
  return (
    <MaxWidthContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: theme.spacing(4),
        }}
      >
        <ErrorMessage>Error loading contacts</ErrorMessage>
      </div>
    </MaxWidthContainer>
  );
};
