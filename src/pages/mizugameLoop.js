import React, { useState } from "react";
import Layout from "@theme/Layout";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Paper,
  Button,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  Snackbar
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    maxWidth: "500px"
  },
  mainPaper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    maxWidth: "500px",
    backgroundSize: "auto auto",
    backgroundColor: "rgba(255, 255, 255, 1)",
    backgroundImage:
      "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(238, 238, 238, 1) 10px, rgba(238, 238, 238, 1) 20px )"
  },
  floor: {
    margin: theme.spacing(1),
    minWidth: "200px"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MizugameLoop = () => {
  const [results, setResults] = useState({});
  const [open, setOpen] = useState(false);
  const [floor, setFloor] = useState(4);
  const handleChange = e => {
    setFloor(parseInt(e.target.value));
  };

  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const loop = () => {
    let logs = [];
    for (let f = 0; f < floor; f++) {
      for (let item = 0; item < 8; item++) {
        const r = Math.random();
        if (r < 0.002706) {
          logs.push(`${f + 1}Fで床落ち水がめを見つけた！😝`);
          setOpen(true);
        } else if (r < 0.020336) {
          logs.push(`${f + 1}Fで床落ち保存の壺を見つけた！`);
        } else if (r < 0.023636) {
          logs.push(`${f + 1}Fで床落ち爆発の指輪を見つけた！`);
        } else if (r < 0.026991) {
          logs.push(`${f + 1}Fで床落ちハラモチの指輪を見つけた！`);
        }
      }
      if (f > 1 && Math.random() < 0.081) {
        logs.push(`${f + 1}F: 店発見！`);
        let flag = true;
        for (let item = 0; item < 8; item++) {
          const r = Math.random();
          if (r < 0.009676) {
            logs.push(`${f + 1}Fの店で水がめを見つけた😝！`);
            setOpen(true);
            flag = false;
          } else if (r < 0.02419) {
            logs.push(`${f + 1}Fの店で保存の壺を見つけた！`);
            flag = false;
          } else if (r < 0.025724) {
            logs.push(`${f + 1}Fの店で爆発の指輪を見つけた！`);
            flag = false;
          } else if (r < 0.028084) {
            logs.push(`${f + 1}Fの店でハラモチの指輪を見つけた！`);
            flag = false;
          }
        }
        if (flag) {
          logs.push("ゴミ店だった🤯");
        }
      }
    }
    if (logs.length === 0) logs.push("何も見つからなかった😰");

    let now = new Date().getTime().toString();
    let newResults = { ...results };
    newResults[now] = logs;
    setResults(newResults);
  };

  const resultPapers = Object.keys(results)
    .reverse()
    .map((r, i) => {
      let logs = results[r].map((log, index) => {
        return (
          <ListItem button key={`log_${r}_${index}`}>
            <ListItemText primary={log} />
          </ListItem>
        );
      });
      return (
        <Paper className={classes.paper} key={r}>
          <Typography variant="h6">{`${Object.keys(results).length -
            i}回目のループ結果`}</Typography>
          <List>{logs}</List>
        </Paper>
      );
    });

  return (
    <Layout>
      <Container maxWidth="sm">
        <Paper className={classes.mainPaper}>
          <Typography variant="h6" gutterBottom>
            水がめループシミュレータ
          </Typography>
          <FormControl className={classes.floor}>
            <InputLabel id="floor-label">あきらめフロア</InputLabel>
            <Select
              labelId="floor-label"
              id="floor"
              value={floor}
              onChange={handleChange}
            >
              <MenuItem value={1}>1F</MenuItem>
              <MenuItem value={2}>2F</MenuItem>
              <MenuItem value={3}>3F</MenuItem>
              <MenuItem value={4}>4F</MenuItem>
            </Select>
          </FormControl>
          <br />

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={loop}
          >
            ループする
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={() => setResults({})}
          >
            クリア
          </Button>
        </Paper>

        {resultPapers}
      </Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          おめでとうございます！
        </Alert>
      </Snackbar>
    </Layout>
  );
};

export default MizugameLoop;
