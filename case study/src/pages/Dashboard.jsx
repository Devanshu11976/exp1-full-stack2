import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";
import LineChart from "../components/LineChart";

const Dashboard = () => {
  // Chart Data
  const websiteViewsData = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "Views",
        data: [50, 20, 10, 22, 50, 10, 40],
        borderColor: "#2196f3",
        backgroundColor: "rgba(33,150,243,0.2)",
        tension: 0.4,
      },
    ],
  };

  const dailySalesData = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 250, 480],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76,175,80,0.2)",
        tension: 0.4,
      },
    ],
  };

  const completedTasksData = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Tasks",
        data: [100, 200, 150, 400, 300, 450, 250, 350, 500],
        borderColor: "#424242",
        backgroundColor: "rgba(66,66,66,0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container-fluid p-4">
        <h4 className="mb-4">Dashboard</h4>

        {/* Stats */}
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <StatCard title="Bookings" value="281" subtitle="+55% than last week" />
          </div>
          <div className="col-md-3">
            <StatCard title="Today's Users" value="2,300" subtitle="+3% than last month" />
          </div>
          <div className="col-md-3">
            <StatCard title="Revenue" value="34k" subtitle="+1% than yesterday" />
          </div>
          <div className="col-md-3">
            <StatCard title="Followers" value="+91" subtitle="Just updated" />
          </div>
        </div>

        {/* Charts */}
        <div className="row g-4">
          <div className="col-md-4">
            <ChartCard title="Website Views">
              <LineChart data={websiteViewsData} />
            </ChartCard>
          </div>

          <div className="col-md-4">
            <ChartCard title="Daily Sales">
              <LineChart data={dailySalesData} />
            </ChartCard>
          </div>

          <div className="col-md-4">
            <ChartCard title="Completed Tasks">
              <LineChart data={completedTasksData} />
            </ChartCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
