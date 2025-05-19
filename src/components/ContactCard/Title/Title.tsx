import { useTheme } from "@common/Theme";

interface TitleProps {
  children: string;
}

export const Title = ({ children }: TitleProps) => {
  const theme = useTheme();
  return (
    <h1
      style={{
        marginTop: 0,
        marginBottom: theme.spacing(2),
        textAlign: "center",
        fontSize: 24,
      }}
    >
      {children}
    </h1>
  );
};
