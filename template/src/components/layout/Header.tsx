import { styled, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface Props {}

export const Header = (props: Props) => {
  const { t } = useTranslation();

  return (
    <StyledToolbar>
      <Typography variant="body2" className="uppercase">
        {t("title")}
      </Typography>
    </StyledToolbar>
  );
};

const StyledToolbar = styled(Toolbar)`
  & > *:nth-child(2) {
    margin-left: auto;
  }
`;
