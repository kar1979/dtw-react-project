import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab/';

export default function FiltersCatego(props) {
  const classes = useTextStyle();
  
  return (
    <ToggleButtonGroup
      value={'all'}
      exclusive
      onChange={props.onChange}
      className={classes.root}
    >
      <ToggleButton value="all">
        All
      </ToggleButton>
      <ToggleButton value="travel">
        Travel
      </ToggleButton>
      <ToggleButton value="lifestyle">
        Lifestyle
      </ToggleButton>
      <ToggleButton value="business">
        Business
      </ToggleButton>
      <ToggleButton value="food">
        Food
      </ToggleButton>
      <ToggleButton value="work">
        Work
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

const useTextStyle = makeStyles ({
  root: {
    '& button': {
      textTransform: 'none',
      fontWeight: 'bold'
    }
  }
});