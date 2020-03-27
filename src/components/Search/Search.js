import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextFieldComponent from './TextFieldComponent';
import SelectFieldComponent from './SelectFieldComponent';
import ImageResults from '../ImageResults/ImageResults';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      // width: '25ch'
      width: '90%'
    }
  }
}));

function Search() {
  const [searchState, setSearchState] = useState({
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '15723047-81a54b4efe25cd4a24b43672b',
    images: []
  });

  useEffect(() => {
    axios
      .get(
        `${searchState.apiUrl}/?key=${searchState.apiKey}&q=${searchState.searchText}&image_type=photo&per_page=${searchState.amount}&safesearch=true`
      )
      .then(res => setSearchState({ ...searchState, images: res.data.hits }))
      .catch(err => console.log(err));
  }, [searchState.searchText]);

  const classes = useStyles();

  const handleTextChange = e => {
    setSearchState({ ...searchState, searchText: e.target.value });
  };

  const handleSelectFieldChange = amount => {
    console.log('`handleSelectFieldChange` log `amount`:::', amount);
    setSearchState({ ...searchState, amount: amount });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextFieldComponent
        id="standard-basic"
        label="Search"
        value={searchState.searchText}
        handleTextChange={handleTextChange}
        floatingLabelText="Search for images"
        // fullWidth={true}
      />
      <SelectFieldComponent handleSelectFieldChange={handleSelectFieldChange} />
      {searchState.images && <ImageResults images={searchState.images} />}
      <div>{searchState.searchText}</div>
    </form>
  );
}

export default Search;
