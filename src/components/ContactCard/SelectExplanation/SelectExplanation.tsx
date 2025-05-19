import { useTheme } from "@common/Theme";

export const SelectExplanation = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        color: theme.palette.contactify.secondary,
        fontSize: 14,
        paddingTop: theme.spacing(1),
        textAlign: "center",
      }}
    >
      Select a row on the left to see the details.
    </div>
  );
};
