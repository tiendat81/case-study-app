import { Box, Button, ButtonGroup, Container, Typography } from '@material-ui/core';
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncreaseClick = () => {
    setCount((x) => x + 1);
    setCount((x) => x + 1);
  };

  const handleResetClick = () => {
    setCount(0);
  };

  return (
    <Container>
      <Box display="flex" mt={3} flexDirection="column">
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
    </Container>
  );
}

export default Counter;
