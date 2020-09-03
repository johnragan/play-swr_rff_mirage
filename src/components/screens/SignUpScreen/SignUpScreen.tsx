import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
//import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Form, Field, FormSpy } from "react-final-form";
import RenderCount from "./RenderCount";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        WDW Escort
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  // @ts-ignore
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // @ts-ignore
  const showResults = async (values) => {
    await sleep(500);
    window.alert(JSON.stringify(values, undefined, 2));
  };
  // @ts-ignore
  const required = (value) => (value ? undefined : "Required");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {/* @ts-ignore */}
        <Form
          onSubmit={showResults}
          // @ts-ignore
          validate={(values) => {}}
          subscription={{
            submitting: true,
          }}
        >
          {({ handleSubmit, submitting }) => (
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <RenderCount index={0} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    validate={required}
                    subscription={{
                      value: true,
                      active: true,
                      error: true,
                      touched: true,
                    }}
                  >
                    {/* {(fieldState) => (
                      <pre>{JSON.stringify(fieldState, undefined, 2)}</pre>
                    )} */}
                    {({ input, meta, placeholder }) => (
                      <div className={meta.active ? "active" : ""}>
                        <RenderCount index={1} />
                        <label>First Name</label>
                        <input {...input} placeholder={placeholder} />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    validate={required}
                    subscription={{
                      value: true,
                      active: true,
                      error: true,
                      touched: true,
                    }}
                  >
                    {/* {(fieldState) => (
                      <pre>{JSON.stringify(fieldState, undefined, 2)}</pre>
                    )} */}
                    {({ input, meta, placeholder }) => (
                      <div className={meta.active ? "active" : ""}>
                        <RenderCount index={2} />
                        <label>Last Name</label>
                        <input {...input} placeholder={placeholder} />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="email"
                    placeholder="Email Address"
                    validate={required}
                    subscription={{
                      value: true,
                      active: true,
                      error: true,
                      touched: true,
                    }}
                  >
                    {/* {(fieldState) => (
                      <pre>{JSON.stringify(fieldState, undefined, 2)}</pre>
                    )} */}
                    {({ input, meta, placeholder }) => (
                      <div className={meta.active ? "active" : ""}>
                        <RenderCount index={3} />
                        <label>Email Address</label>
                        <input {...input} placeholder={placeholder} />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="password"
                    placeholder="Password"
                    validate={required}
                    subscription={{
                      value: true,
                      active: true,
                      error: true,
                      touched: true,
                    }}
                  >
                    {/* {(fieldState) => (
                      <pre>{JSON.stringify(fieldState, undefined, 2)}</pre>
                    )} */}
                    {({ input, meta, placeholder }) => (
                      <div className={meta.active ? "active" : ""}>
                        <RenderCount index={4} />
                        <label>Password</label>
                        <input {...input} placeholder={placeholder} />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={submitting}
              >
                Sign Up
              </Button>
              <FormSpy subscription={{ values: true }}>
                {({ values }) => (
                  <pre>
                    <RenderCount index={3} />
                    {JSON.stringify(values, undefined, 2)}
                  </pre>
                )}
              </FormSpy>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          )}
        </Form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
