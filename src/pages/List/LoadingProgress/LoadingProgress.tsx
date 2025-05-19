import { useTheme } from "@common/Theme";
import { IndicatorProgress } from "@components/IndicatorProgress";
import { MaxWidthContainer } from "@components/MaxWidthContainer";

export const LoadingProgress = () => {
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
        <IndicatorProgress />
      </div>
    </MaxWidthContainer>
  );
};
