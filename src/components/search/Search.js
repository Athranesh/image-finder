import React, { useEffect, useContext } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core/';
import PixabayContext from '../../context/pixabay/pixabayContext';

const Search = () => {
  const pixabayContext = useContext(PixabayContext);

  useEffect(() => {
    pixabayContext.searchImages(pixabayContext.amount, pixabayContext.query);
  }, [pixabayContext.amount, pixabayContext.query]);

  //UseEffect is used because of the fact that state changes asynchronously and there may be lag in state changes. Use Effect will execute once the props passed in the brackets at the end are updated successfully, preventing wrong image display due to the lag. NOTE: The brackets are necessary, otherwise useEffect, at least in this project, will run infinitely and Pixabay will hate me as a result.

  const textOnChange = e => {
    pixabayContext.setQuery(e.target.value);
  };

  const amountOnChange = e => {
    pixabayContext.setAmount(e.target.value);
  };

  return (
    <Container>
      <Typography style={{ padding: 15, marginTop: 15 }}>
        Search over a million high quality stock photos!{' '}
      </Typography>
      <TextField
        variant='outlined'
        label='Search for images'
        margin='normal'
        fullWidth
        onChange={textOnChange}
      />

      <TextField
        select
        variant='outlined'
        label='Amount'
        style={{ minWidth: 120, marginTop: 10 }}
        onChange={amountOnChange}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </TextField>
    </Container>
  );
};

export default Search;
