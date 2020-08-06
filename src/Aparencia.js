import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

export default function Aparencia() {
  const [genero, setValue] = React.useState('homem');
  const [olhos, setOlhos] = React.useState('sombrios');
  const [roupas, setRoupa] = React.useState('amarrotadas');
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeOlhos = (event) => {
    setOlhos(event.target.value);
  };

  const handleChangeRoupa = (event) => {
    setRoupa(event.target.value);
  };

  return (
    <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.root} spacing={2}>
      <Grid item  xs={12}>
        <FormControl component="fieldset">
          <RadioGroup aria-label="genero" name="genero" value={genero} onChange={handleChange}>
            <FormControlLabel value="homem" control={<Radio />} label="Homem" />
            <FormControlLabel value="mulher" control={<Radio />} label="Mulher" />
            <FormControlLabel value="androgino" control={<Radio />} label="Andrógino" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <RadioGroup aria-label="olhos" name="olhos" value={olhos} onChange={handleChangeOlhos}>
            <FormControlLabel value="sombrios" control={<Radio />} label="Sombrios" />
            <FormControlLabel value="ferozes" control={<Radio />} label="Ferozes" />
            <FormControlLabel value="cansados" control={<Radio />} label="Cansados" />
            <FormControlLabel value="faiscantes" control={<Radio />} label="Faiscantes" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <RadioGroup aria-label="roupas" name="roupas" value={roupas} onChange={handleChangeRoupa}>
            <FormControlLabel value="amarrotadas" control={<Radio />} label="Amarrotadas" />
            <FormControlLabel value="estilosas" control={<Radio />} label="Estilosas" />
            <FormControlLabel value="goticas" control={<Radio />} label="Góticas" />
            <FormControlLabel value="antiquadas" control={<Radio />} label="Antiquadas" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
}
