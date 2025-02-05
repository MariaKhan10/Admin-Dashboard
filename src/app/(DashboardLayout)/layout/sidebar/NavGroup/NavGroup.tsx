import PropTypes from "prop-types";
import { ListSubheader, styled } from "@mui/material";

type NavGroupProps = {
  navlabel?: boolean;
  subheader?: string;
};

interface ItemType {
  item: NavGroupProps;
}

// ✅ Correctly typed MUI styling without 'any' error
const ListSubheaderStyle = styled(ListSubheader)(({ theme }) => ({
  ...theme.typography.overline,
  fontWeight: "700",
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(0),
  color: theme.palette.text.primary,
  lineHeight: "26px",
  padding: "3px 12px",
}));

const NavGroup = ({ item }: ItemType) => {
  return <ListSubheaderStyle disableSticky>{item.subheader}</ListSubheaderStyle>;
};

NavGroup.propTypes = {
  item: PropTypes.shape({
    navlabel: PropTypes.bool,
    subheader: PropTypes.string,
  }),
};

export default NavGroup;
