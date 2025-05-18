import { useTheme } from "@common/Theme";

export const Logo = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        color: theme.palette.contactify.contrast,
        textTransform: "uppercase",
        fontSize: 36,
        fontWeight: 700,
        fontFamily: "Open Sans",
      }}
    >
      Contactify
    </div>
  );
};
