import { useState } from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material"
import { useStyles } from "./Login.styles"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function Login() {
    const classes = useStyles()
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = () => {
        signInWithEmailAndPassword(auth,  email, password)
            .then((res) => console.log(res))
            .catch((err) => alert(err.message))
            .finally(() => {
                history.push('/')
            })
    }
    return (
        <Container className={classes.container} maxWidth='xs'>
            <div className={classes.imgContainer}>
                <img className={classes.logoImg} src="https://bit.ly/2YB1Uze" alt="" />
            </div>
            <Paper className={classes.paper} variant='outlined'>
                <Typography variant='h4' gutterBottom>Sign in</Typography>
                <TextField fullWidth type='email' value={email} onChange={(e) => setEmail(e.target.value)} variant='outlined' label='Email' size='small' margin="dense" />
                <TextField fullWidth type='password' value={password} onChange={(e) => setPassword(e.target.value)} variant='outlined' label='Password' size='small' margin="dense"/>
                <Button variant='contained' onClick={signIn} className={classes.signInBtn} color='warning'>
                    <Typography className={classes.btnText} variant='subtitle1' >Sign in</Typography>
                </Button>
                <Typography variant='caption' gutterBottom>
                    By signing in you agree to Amazon's Conditions of use & sales
                </Typography>
                <Typography variant='subtitle1' gutterBottom> Don't have an account ? <Link to='/signup'>Create an account</Link> </Typography>
            </Paper>
        </Container>
    )
}

export default Login
