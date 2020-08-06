import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import RadioButtons from './RadioButtons';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Aparencia from './Aparencia';
import Classificacoes from './Classificacoes';
import TextField from '@material-ui/core/TextField';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Trabalho Pratico Padroes de Desenvolvimento Front End - '}
      <Link color="inherit" href="#">
        Gabriel Bet Barbosa
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
    background: '#000'
  },
  textField: {
    paddingRight: 24,
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  button: {
    background: '#003366',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    align: 'center',
    marginTop: '10px',
    padding: '0 30px',
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Paper square className={fixedHeightPaper}>
                <TextField className={classes.textField} id="nome" label="Nome" />
                <Typography variant="h3">
                  O ARCANO
                </Typography>
                <Typography variant="subtitle1">
                  Eu combato o fogo com fogo mágico.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper square className={classes.paper}>
                <TextField className={classes.textField} color="secondary" id="braveza" label="BRAVEZA" />
                <Typography variant="caption">
                  Partir pra porrada! Proteger alguém!
                </Typography>
                <TextField className={classes.textField} color="secondary" id="esperteza" label="ESPERTEZA" />
                <Typography variant="caption">
                  Investigar um mistério, perceber uma enrascada
                </Typography>
                <TextField className={classes.textField} color="secondary" id="estranheza" label="ESTRANHEZA" />
                <Typography variant="caption">
                  Usar magia
                </Typography>
                <TextField className={classes.textField} color="secondary" id="firmeza" label="FIRMEZA" />
                <Typography variant="caption">
                  Agir sob pressão Dar uma mão
                </Typography>
                <TextField className={classes.textField} color="secondary" id="sutileza" label="SUTILEZA" />
                <Typography variant="caption">
                  Manipular alguém
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper square className={classes.paper}>
                <Typography variant="h6">
                  SORTE
                </Typography>
                Marque uma caixa de Sorte para alterar uma rolagem para 12 ou evitar todo o dano de um ferimento.
                <RadioButtons/>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper square className={classes.paper}>
                <Typography variant="h6">
                  DANO
                </Typography>
                Quando você chegar em 4 ou mais, marque 'Instável'.
                <RadioButtons />
                <FormControlLabel
                  // value="start"
                  control={<Checkbox color="primary" />}
                  label="Instável"                  
                />Lesões instáveis pioraram com o tempo
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper square className={classes.paper}>
                <Typography variant="h6">
                  CRIAÇÃO DO CAÇADOR
                </Typography>
                Para criar seu caçador Arcano, primeiro escolha e 
                escreva um nome na primeira linha da folha. Então siga 
                as instruções para decidir sua aparência, classificações, 
                magia combativa, movimentos e equipamentos. Finalmente, 
                se apresente e escolha o histórico.
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper square className={classes.paper}>
                <Typography variant="h6">
                  APARÊNCIA, ESCOLHA UM EM CADA LISTA:
                </Typography>
                <Aparencia/>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper square className={classes.paper}>
                <Typography variant="h6">
                  CLASSIFICAÇÕES, ESCOLHA UMA LINHA:
                </Typography>
                <Classificacoes/>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper square className={classes.paper}>
                <Typography variant="h6">
                  APRESENTAÇÕES
                </Typography>
                Quando você chegar aqui, espere que todos também 
                cheguem para que vocês se apresentem juntos. Na sua 
                vez descreva seu caçador e diga ao grupo o que eles sabem sobre você.
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper square className={classes.paper}>
                <Typography variant="h6">
                  HISTÓRICO
                </Typography>
                  Na sua vez escolha um desde para cada um dos caçadores:

              </Paper>
            </Grid>

          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
