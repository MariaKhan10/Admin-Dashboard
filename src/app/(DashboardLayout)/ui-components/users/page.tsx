"use client";
import {
  Alert,
  AlertTitle,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import BaseCard from "@/app/(DashboardLayout)/components/shared/BaseCard";

const users = [
  { id: 1, name: "Maria", email: "maria@gmail.com" },
  { id: 2, name: "Aqsa", email: "aqsa@ymail.com" },
  { id: 3, name: "Namra", email: "namra@yahoo.com" },
  { id: 4, name: "Komal", email: "komal@gmail.com" },
  { id: 5, name: "Shehriyar", email: "shali@example.com" },
  { id: 6, name: "Ahmed", email: "ahmed2@yahoo.com" },
];

const Users = () => {
  return (
    <BaseCard title="Users List">
      {users.length > 0 ? (
        <List>
          {users.map((user) => (
            <ListItem key={user.id}>
              <ListItemText primary={user.name} secondary={user.email} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Alert severity="info">
          <AlertTitle>No Users Found</AlertTitle>
          There are no registered users yet.
        </Alert>
      )}
    </BaseCard>
  );
};

export default Users;
