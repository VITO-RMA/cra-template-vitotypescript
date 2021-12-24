import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { FallbackProps } from "react-error-boundary";
import JSONPretty from "react-json-pretty";
import { useTranslation } from "react-i18next";
import { AxiosError } from "axios";

type AxiosAPIError = AxiosError<Error> | AxiosError<Error[]>;

export function GlobalErrorFallBack(props: FallbackProps) {
  const { error, resetErrorBoundary } = props;
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  return render();

  function render() {
    return (
      <Styles>
        <Card className="card">
          <CardContent className="main">
            <div className="status">😕</div>
            <div className="content">
              <Typography variant="h2" component="h1">
                {t("label.somethingWentWrong")}
              </Typography>
              <Typography variant="body1" component="p">
                {t("label.tryAgainAndOtherOptions")}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button onClick={() => resetErrorBoundary()} color="primary">
              {t("label.tryAgain")}
            </Button>
            <Button onClick={() => setExpanded(!expanded)}>
              {t("label.errorDetails")}
            </Button>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent className="error-details">
              {renderErrorDetails(error)}
            </CardContent>
          </Collapse>
        </Card>
      </Styles>
    );
  }

  function renderErrorDetails(error: Error | AxiosAPIError) {
    if ((error as AxiosAPIError).response) {
      return (
        <JSONPretty data={JSON.stringify((error as AxiosAPIError).response)} />
      );
    } else {
      return (
        <Grid container spacing={1}>
          <Grid item>
            <Typography variant="h2" className="detail-title">
              Name
            </Typography>
            <JSONPretty data={error.name} />
          </Grid>
          <Grid item>
            <Typography variant="h2" className="detail-title">
              Message
            </Typography>
            <JSONPretty data={error.message} />
          </Grid>
          <Grid item>
            <Typography variant="h2" className="detail-title">
              Stacktrace
            </Typography>
            <JSONPretty data={error.stack} />
          </Grid>
        </Grid>
      );
    }
  }
}

const Styles = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    width: 100%;
    max-width: 600px;
    height: fit-content;
    max-height: calc(100vh - 40px);
    overflow: scroll;
  }

  .status {
    width: 100px;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4em;
    margin-left: ${({ theme }) => theme.spacing(1)};
  }

  .main {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }

  .error-details {
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: #ddd;
    color: black;

    & * {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-all;
      word-break: break-word;
      white-space: pre-wrap;
      hyphens: auto;
    }
  }
  .detail-title {
    /* font-style: italic; */
    color: #666;
  }
`;
