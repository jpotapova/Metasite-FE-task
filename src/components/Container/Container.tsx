import { useTheme } from "@common/Theme";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
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
