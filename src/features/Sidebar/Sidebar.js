// @flow
import React, { Component } from "react"
import { withStyles } from "material-ui/styles"
import Drawer from "material-ui/Drawer"
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import Typography from "material-ui/Typography"
import Hidden from "material-ui/Hidden"
import IconButton from "material-ui/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import FingerprintIcon from "@material-ui/icons/Fingerprint"
import WorkIcon from "@material-ui/icons/Work"
import DataUsageIcon from "@material-ui/icons/DataUsage"
import {
  StyledLink,
  ListStyle,
  // DrawerPaperStyle,
  DrawerHeaderStyle
} from "./SidebarStyles"

const styles = theme => ({
  drawerPaper: {
    width: "240px",
    [theme.breakpoints.up("md")]: {
      position: "relative"
    },
    height: "100%"
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
})

type Props = {
  /** Material-UI property for customizing CSS */
  classes: Object
}

class Sidebar extends Component<Props> {
  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  render() {
    const { classes, theme } = this.props

    const drawerContent = (
      <div>
        <ListStyle>
          <ListItem button>
            <ListItemIcon>
              <FingerprintIcon />
            </ListItemIcon>
            <StyledLink to="/dashboard/genomes">
              <ListItemText primary="Genomes" />
            </StyledLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <StyledLink to="/dashboard/curation">
              <ListItemText primary="Curation" />
            </StyledLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DataUsageIcon />
            </ListItemIcon>
            <StyledLink to="/dashboard/analytics">
              <ListItemText primary="Analytics" />
            </StyledLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <TrendingUpIcon />
            </ListItemIcon>
            <StyledLink to="/dashboard/dicty-stock-center">
              <ListItemText primary="Dicty Stock Center" />
            </StyledLink>
          </ListItem>
        </ListStyle>
      </div>
    )

    return (
      <div>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}>
            <DrawerHeaderStyle>
              <Typography variant="title" color="inherit">
                DictyAccess
              </Typography>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}>
                <MenuIcon />
              </IconButton>
            </DrawerHeaderStyle>
            {drawerContent}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}>
            <DrawerHeaderStyle>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}>
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                DictyAccess
              </Typography>
            </DrawerHeaderStyle>
            {drawerContent}
          </Drawer>
        </Hidden>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Sidebar)
