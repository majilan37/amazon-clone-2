import { useState } from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material"
import { useStyles } from "./signup.styles"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function Signup() {
    const classes = useStyles()
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const signup = () => {
        if (password !== confirmPassword) {
            return alert('password dont match')
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => console.log(user))
                .catch((err) => alert(err.message))
                .finally(() => {
                    history.push('/')
                })
        }
    }

    return (
        <Container className={classes.container} maxWidth='xs'>
            <div className={classes.imgContainer}>
                <img className={classes.logoImg} src="https://bit.ly/2YB1Uze" alt="" />
            </div>
            <Paper className={classes.paper} variant='outlined'>
                <Typography variant='h4' gutterBottom>Sign up</Typography>
                <TextField required fullWidth type='email' value={email} onChange={(e) => setEmail(e.target.value)} variant='outlined' label='Email' size='small' margin="dense" />
                <TextField required fullWidth type='password' value={password} onChange={(e) => setPassword(e.target.value)} variant='outlined' label='Password' size='small' margin="dense"/>
                <TextField required fullWidth type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} variant='outlined' label='Confirm Password' size='small' margin="dense"/>
                <Button variant='contained' onClick={signup}className={classes.signInBtn} color='inherit'>
                    <Typography className={classes.btnText} variant='subtitle1' >Create an account</Typography>
                </Button>
                <Typography variant='caption' gutterBottom>
                    By signing up you agree to Amazon's Conditions of use & sales
                </Typography>
                <Typography variant='subtitle1' gutterBottom> Don't have an account ? <Link to='/login' >Create an account</Link> </Typography>
            </Paper>
        </Container>
    )
}

export default Signup
