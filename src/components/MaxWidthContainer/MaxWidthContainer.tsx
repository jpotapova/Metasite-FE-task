import { useTheme } from "@common/Theme";

interface MaxWidthContainerProps {
  children: React.ReactNode;
}

export const MaxWidthContainer = ({ children }: MaxWidthContainerProps) => {
  const theme = useTheme();
  return (
    <div
      style={{
        maxWidth: theme.spacing(180),
        margin: "0 auto",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      }}
    >
      {children}
    </div>
  );
};
