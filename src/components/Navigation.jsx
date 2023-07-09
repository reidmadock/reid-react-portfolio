import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';import Home from './Home';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Navigation() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="Navigation" textColor='#e76b74' centered>
                <Tab label="Home" {...a11yProps(0)} />
                <Tab label="Portfolio" {...a11yProps(1)} />
                <Tab label="Resume" {...a11yProps(2)} />
                <Tab label="Contact" {...a11yProps(3)} />
            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            <Home />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            <Portfolio />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
            <Resume />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
            <Contact />
        </CustomTabPanel>
    </Box>
  );
}