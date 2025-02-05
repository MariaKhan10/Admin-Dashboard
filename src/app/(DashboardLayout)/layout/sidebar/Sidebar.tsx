import { useMediaQuery, Box, Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles"; // ✅ Import useTheme()
import Logo from "../shared/logo/Logo";
import SidebarItems from "./SidebarItems";
import Upgrade from "./Updrade";

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event?: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}




const Sidebar = ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}: ItemType) => {
  const theme = useTheme(); // ✅ Get MUI theme
  const lgUp = useMediaQuery(theme.breakpoints.up("lg")); // ✅ Properly use theme

  const handleSidebarClose = () => {
    if (onSidebarClose) {
      onSidebarClose(); // Call the function without passing an event
    }
  };
  
  

  const sidebarWidth = "270px";

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        {/* Sidebar for Desktop */}
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: "border-box",
              border: "0",
              boxShadow: "rgba(113, 122, 131, 0.11) 0px 7px 30px 0px",
            },
          }}
        >
          {/* Sidebar Content */}
          <Box sx={{ height: "100%" }} py={2}>
            {/* Logo */}
            <Box px={2}>
              <Logo />
            </Box>
            {/* Sidebar Items */}
            <Box mt={3}>
              <SidebarItems toggleMobileSidebar={() => onSidebarClose()} />
              <Upgrade />
            </Box>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
    anchor="left"
    open={isMobileSidebarOpen}
    onClose={handleSidebarClose} // ✅ Fix: MUI expects this function signature
    variant="temporary"
    PaperProps={{
      sx: {
        width: sidebarWidth,
        boxShadow: theme.shadows[8],
      },
    }}
  >
  
      {/* Sidebar for Mobile */}
      <Box px={2} py={2}>
        <Logo />
      </Box>
      <SidebarItems toggleMobileSidebar={() => onSidebarClose()} />
      <Upgrade />
    </Drawer>
  );
};

export default Sidebar;
