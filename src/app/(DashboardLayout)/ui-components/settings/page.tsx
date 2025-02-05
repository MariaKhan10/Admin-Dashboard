'use client';
import { Grid, Paper, Typography, Switch, FormControlLabel, TextField, Button } from '@mui/material';

const Settings = () => {
  return (
    <Grid container spacing={3}>
      {/* Profile Settings */}
      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 3 }}>
          <Typography variant="h6">Profile Settings</Typography>
          <TextField fullWidth label="Full Name" variant="outlined" margin="normal" />
          <TextField fullWidth label="Email" variant="outlined" margin="normal" />
          <TextField fullWidth type="password" label="Change Password" variant="outlined" margin="normal" />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>Save Changes</Button>
        </Paper>
      </Grid>

      {/* Theme Settings */}
      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 3 }}>
          <Typography variant="h6">Theme Settings</Typography>
          <FormControlLabel control={<Switch defaultChecked />} label="Dark Mode" />
          <FormControlLabel control={<Switch />} label="Enable Animations" />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>Apply Settings</Button>
        </Paper>
      </Grid>

      {/* Notification Settings */}
      <Grid item xs={12}>
        <Paper sx={{ padding: 3 }}>
          <Typography variant="h6">Notification Settings</Typography>
          <FormControlLabel control={<Switch defaultChecked />} label="Email Notifications" />
          <FormControlLabel control={<Switch />} label="Push Notifications" />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>Save Preferences</Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Settings;
