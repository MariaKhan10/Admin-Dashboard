import {
  IconCircleDot,
  IconHome,
  IconStar,
  IconTable,
  IconUser,
  IconSettings
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
 {
   id: uniqueId(),
   title: "Dashboard",
   icon: IconHome,
   href: "/ui-components/dashboard",
 },
 {
   id: uniqueId(),
   title: "Products",
   icon: IconCircleDot,
   href: "/ui-components/products",
 },
 {
   id: uniqueId(),
   title: "Orders",
   icon: IconTable,
   href: "/ui-components/orders",
 },
 {
   id: uniqueId(),
   title: "Users",
   icon: IconUser,  
   href: "/ui-components/users",
 },
 {
   id: uniqueId(),
   title: "Analytics",
   icon: IconStar,
   href: "/ui-components/analytics",
 },
 {
   id: uniqueId(),
   title: "Settings",
   icon: IconSettings, 
   href: "/ui-components/settings",
 },
];

export default Menuitems;
