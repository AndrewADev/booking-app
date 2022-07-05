import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import VehicleList from "./vehicles/VehicleList";
import BookingList from "./bookings/BookingList";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";

const LandingPageTabs = () => {
  const [currentTab, setCurrentTab] = useState("vehicles");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  return (
    <Box style={{color: "#E5E5E5"}}>
      <TabContext value={currentTab}>
        <Box>
          <TabList 
            variant="fullWidth"
            indicatorColor="primary"
            textColor="inherit"
            onChange={handleChange} 
            aria-label="navigation tabs"
          >
            <Tab label="Vehicles" value="vehicles" />
            <Tab label="Bookings" value="bookings" />
          </TabList>
        </Box>
        <TabPanel value="vehicles">
          <VehicleList />
        </TabPanel>
        <TabPanel value="bookings">
          <BookingList />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default LandingPageTabs;
