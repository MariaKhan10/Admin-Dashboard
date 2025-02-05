import React from "react";
import Menuitems from "./MenuItems";
import { usePathname } from "next/navigation";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";

interface SidebarItemsProps {
  toggleMobileSidebar: () => void; // ✅ Correct type for function
}

const SidebarItems: React.FC<SidebarItemsProps> = ({ toggleMobileSidebar }) => {
  const pathname = usePathname();
  const pathDirect = pathname;

  return (
    <Box sx={{ px: 2 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map((item) => (
          <NavItem
            item={item}
            key={item.id}
            pathDirect={pathDirect}
            onClick={toggleMobileSidebar}
          />
        ))}
      </List>
    </Box>
  );
};

export default SidebarItems;
