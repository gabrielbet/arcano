import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Classificacoes() {
  const [value, setValue] = React.useState('1');
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.root} spacing={2}>
      <Grid item  xs={12}>
        <FormControl component="fieldset">
          <RadioGroup aria-label="classificacao" name="classificacao" value={value} onChange={handleChange}>
            <FormControlLabel value="1" control={<Radio />} label="Braveza ±0, Esperteza +1, Estranheza +2, Firmeza +1, Sutileza −1" />
            <FormControlLabel value="2" control={<Radio />} label="Braveza +1, Esperteza +1, Estranheza +2, Firmeza −1, Sutileza ±0" />
            <FormControlLabel value="3" control={<Radio />} label="Braveza −1, Esperteza +2, Estranheza +2, Firmeza ±0, Sutileza −1" />
            <FormControlLabel value="4" control={<Radio />} label="Braveza −1, Esperteza +1, Estranheza +2, Firmeza ±0, Sutileza +1" />
            <FormControlLabel value="5" control={<Radio />} label="Braveza ±0, Esperteza +1, Estranheza +2, Firmeza ±0, Sutileza ±0" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
}
