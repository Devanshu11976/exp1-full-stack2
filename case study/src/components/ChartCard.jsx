import { Card, CardContent, Typography } from "@mui/material";

const ChartCard = ({ title, children }) => {
  return (
    <Card className="shadow-sm">
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {title}
        </Typography>

        <div style={{ height: "220px" }}>
          {children}
        </div>

        <Typography
          variant="caption"
          color="text.secondary"
          style={{ marginTop: "8px", display: "block" }}
        >
          Last Campaign Performance
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
