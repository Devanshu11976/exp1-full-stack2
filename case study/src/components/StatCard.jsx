import { Card, CardContent, Typography } from "@mui/material";

const StatCard = ({ title, value, subtitle }) => {
  return (
    <Card className="shadow-sm">
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          {value}
        </Typography>
        <Typography variant="caption" color="green">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;
