import React, { ReactNode } from "react";
import { Card } from "@mui/material";

type Props = {
  className?: string;
  children: ReactNode; // JSX.Element ka replacement
};

const BlankCard = ({ children, className }: Props) => {
  return (
    <Card
      sx={{ p: 0, position: "relative" }}
      className={className}
      elevation={9}
      variant="outlined" // `undefined` hata diya
    >
      {children}
    </Card>
  );
};

export default BlankCard;
