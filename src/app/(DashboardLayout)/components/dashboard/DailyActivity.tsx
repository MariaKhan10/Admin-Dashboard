import * as React from "react"; 
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import DashboardCard from "../shared/DashboardCard";

const activities = [
  {
    time: "10:30 AM",
    color: "success.main",
    text: "Order #12345 confirmed - Preparing food",
  },
  {
    time: "10:45 AM",
    color: "warning.main",
    text: "Delivery partner assigned for Order #12345",
  },
  {
    time: "11:00 AM",
    color: "primary.main",
    text: "Order #12345 out for delivery",
  },
  {
    time: "11:15 AM",
    color: "secondary.main",
    text: "New order received - #12346",
  },
  {
    time: "11:30 AM",
    color: "error.main",
    text: "Customer reported issue with Order #12342",
  },
];

const DailyActivity = () => {
  return (
    <DashboardCard title="Daily Activity">
      <Timeline sx={{ p: 0 }}>
        {activities.map((activity) => (
          <TimelineItem key={activity.time}>
            <TimelineOppositeContent sx={{ fontSize: "12px", fontWeight: "700", flex: "0" }}>
              {activity.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" sx={{ borderColor: activity.color }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent color="text.secondary" sx={{ fontSize: "14px" }}>
              {activity.text}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </DashboardCard>
  );
};

export default DailyActivity;
