import { useTheme } from "@common/Theme";

interface MessageProps {
  children: React.ReactNode;
}

export const Message = ({ children }: MessageProps) => {
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
      {children}
    </div>
  );
};
