import { Box, Button, ButtonGroup, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

const useStyles = makeStyles({
  counter: {
    display: 'flex',
    flexDirection: 'column',
    margin: '100px auto',
    width: '300px',
    height: '300px',
  },
});

function Counter() {
  const classes = useStyles();

  const [count, setCount] = useState(0);

  const handleIncreaseClick = () => {
    setCount((x) => x + 1);
  };

  const handleResetClick = () => {
    setCount(0);
  };

  return (
    <Box className={classes.counter}>
      <Typography variant="h4" component="h4">
        Counter
      </Typography>
      <Typography variant="h4" component="h4">
        {count}
      </Typography>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={handleIncreaseClick}>Increase</Button>
        <Button onClick={handleResetClick}>Reset</Button>
      </ButtonGroup>
    </Box>
  );
}

export default Counter;
