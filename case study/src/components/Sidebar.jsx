import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableChartIcon from "@mui/icons-material/TableChart";
import PaymentIcon from "@mui/icons-material/Payment";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Sidebar = () => {
  return (
    <div className="bg-dark text-white vh-100 p-3" style={{ width: "260px" }}>
      <h5 className="mb-4">Material Dashboard</h5>

      <List>
        <ListItem button>
          <ListItemIcon><DashboardIcon style={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button>
          <ListItemIcon><TableChartIcon style={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItem>

        <ListItem button>
          <ListItemIcon><PaymentIcon style={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Billing" />
        </ListItem>

        <ListItem button>
          <ListItemIcon><NotificationsIcon style={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
      </List>

      <button className="btn btn-primary w-100 mt-4">UPGRADE TO PRO</button>
    </div>
  );
};

export default Sidebar;
