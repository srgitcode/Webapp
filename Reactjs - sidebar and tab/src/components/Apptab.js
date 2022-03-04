import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

//import "./styles.css";

import PropTypes from "https://cdn.skypack.dev/prop-types@15.8.1";
import { makeStyles , AppBar , Tabs, Tab , Typography , Box  } from "https://cdn.skypack.dev/@material-ui/core@4.12.3";
//import { makeStyles } from "https://cdn.skypack.dev/@material-ui/core@4.12.3/styles";
//import AppBar from "https://cdn.skypack.dev/@material-ui/core@4.12.3/AppBar";
//import Tabs from "https://cdn.skypack.dev/@material-ui/core@4.12.3/Tabs";
//import Tab from "https://cdn.skypack.dev/@material-ui/core@4.12.3/Tab";
//import Typography from "https://cdn.skypack.dev/@material-ui/core@4.12.3/Typography";
//import Box from "https://cdn.skypack.dev/@material-ui/core@4.12.3/Box";

export const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

export const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export const Apptab = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
     
    </div>
  );
}

export default Apptab;