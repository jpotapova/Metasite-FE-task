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
      }}
    >
      {children}
    </div>
  );
};
