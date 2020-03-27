import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function SelectFieldComponent({ handleSelectFieldChange }) {
  const classes = useStyles();
  const [results, setResults] = useState('');

  const handleChange = event => {
    setResults(event.target.value);
    console.log(
      'inside `SelectFieldComponent` in `handleChange` log `results`:::',
      results
    );
    handleSelectFieldChange(results);
  };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Number of results</InputLabel>
      <Select
        name="results"
        floatingLabelText="Results"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={results}
        // value={amount}
        onChange={handleChange}
        // onChange={handleSelectFieldChange(results)}
      >
        <MenuItem value={5}>Five</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={15}>Fifteen</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={25}>Twenty-Five</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectFieldComponent;
