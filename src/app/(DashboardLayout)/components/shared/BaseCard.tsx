import React, { ReactNode } from "react";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";

type Props = {
  title?: string;
  subtitle?: string;
  action?: ReactNode; // JSX.Element hata diya
  footer?: ReactNode;
  cardheading?: string | ReactNode;
  headtitle?: string | ReactNode;
  headsubtitle?: string | ReactNode;
  children?: ReactNode;
  middlecontent?: string | ReactNode;
};

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
}: Props) => {
  return (
    <Card sx={{ padding: 0 }} elevation={9} variant="outlined">
      {cardheading && (
        <CardContent>
          <Typography variant="h4">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      )}

      {!cardheading && (
        <CardContent sx={{ p: "30px" }}>
          {title && (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
              mb={3}
            >
              <Box>
                <Typography variant="h4">{title}</Typography>
                {subtitle && (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                )}
              </Box>
              {action}
            </Stack>
          )}
          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
