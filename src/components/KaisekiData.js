import React, { useState } from 'react';
import { kaisekiData } from 'torneko3js';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const ScrollableTabsButtonAuto = ({dungeon, floor}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Tab label="基本情報" {...a11yProps(0)} />
          <Tab label="モンスター" {...a11yProps(1)} />
          <Tab label="罠" {...a11yProps(2)} />
          <Tab label="床落ち" {...a11yProps(3)} />
          <Tab label="店" {...a11yProps(4)} />
          <Tab label="変化の壺" {...a11yProps(5)} />
          <Tab label="壁の中" {...a11yProps(6)} />
          <Tab label="モノカ" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BasicList dungeon={dungeon} floor={floor}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MonsterList dungeon={dungeon} floor={floor}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TrapList dungeon={dungeon} floor={floor}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Eight
      </TabPanel>
    </div>
  );
}

const TrapList = ({dungeon, floor}) => {
  let traps = [];
  Object.entries(kaisekiData[dungeon][floor-1].trap).forEach(
    ([name, p]) => {
      traps.push(
        <ListItem><ListItemText primary={name} secondary={`${p}%`} /></ListItem>
      );
    }
  ); 
  return (
    <List dense={true}>{traps}</List> 
  );
}

const MonsterList = ({dungeon, floor}) => {
  let monsters = [];
  Object.entries(kaisekiData[dungeon][floor-1].monster).forEach(
    ([name, [lv, p]]) => {
      monsters.push(
        <ListItem><ListItemText primary={`${name} Lv${lv}`} secondary={`${p}%`} /></ListItem>
      );
    }
  );
  return (
    <List dense={true}>{monsters}</List>
  );
}

const BasicList = ({dungeon, floor}) => {
  const basic = kaisekiData[dungeon][floor-1].basic;
  return (
    <List dense={true}>
      <ListItem><ListItemText primary="店率" secondary={`${basic.shop}%`} /></ListItem>
      <ListItem><ListItemText primary="MH率" secondary={`${basic.house}%`} /></ListItem>
      <ListItem><ListItemText primary="フロアタイプ" secondary={basic.pattern} /></ListItem>
      <ListItem><ListItemText primary="呪い率" secondary={`${basic.cursed}%`} /></ListItem>
      <ListItem><ListItemText primary="ひとくいばこ率" secondary={`${basic.fake}%`} /></ListItem>
      <ListItem><ListItemText primary="床落ちアイテム数" secondary={`${basic.item}個`} /></ListItem>
      <ListItem><ListItemText primary="壁中アイテム数" secondary={`${basic.itemInWall}個`} /></ListItem>
      <ListItem><ListItemText primary="罠数" secondary={`${basic.trap}個`} /></ListItem>
      <ListItem><ListItemText primary="初期モンスター数" secondary={`${basic.monster}匹`} /></ListItem>
    </List>
  );
}

const KaisekiData = () => {
  const classes = useStyles();
  const [dungeon, setDungeon] = useState("異世界の迷宮");
  const dungeonList = Object.keys(kaisekiData).map(dungeonName => (
    <option value={dungeonName} key={dungeonName}>{dungeonName}</option>
  ));
  const [floor, setFloor] = useState(1);
  const floorList = Array.from({length: kaisekiData[dungeon].length}, (v, k) => k).map(f => (
    <option value={f+1} key={f}>{f+1}F</option>
  ))

  const handleDungeonChange = e => {
    e.preventDefault();
    setDungeon(e.target.value);
    setFloor(1);
  }

  const handleFloorChange = e => {
    e.preventDefault();
    setFloor(e.target.value);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-dungeon">ダンジョン</InputLabel>
          <Select
            native
            defaultValue={dungeon}
            onChange={handleDungeonChange}
            inputProps={{
              name: 'dungeon',
              id: 'select-dungeon',
            }}
          >
            {dungeonList}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-floor">フロア</InputLabel>
          <Select
            native
            defaultValue={floor}
            onChange={handleFloorChange}
            inputProps={{
              name: 'floor',
              id: 'select-floor',
            }}
          >
            {floorList}
          </Select>
        </FormControl>
  
        <ScrollableTabsButtonAuto dungeon={dungeon} floor={floor} />
      </Container>
    </React.Fragment>
  )
}

export default KaisekiData;