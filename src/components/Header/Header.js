import { ShoppingBasket } from "@mui/icons-material";
import { AppBar, Button, ButtonGroup, IconButton, ImageListItem, Toolbar, Typography, } from "@mui/material"
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useStateValue } from "../../assets/StateProvider";
import { useStyles } from "./Header.styles"
import HeaderInput from "./HeaderInput";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Header() {
    const classes = useStyles()
    const history = useHistory()
    const [{basket, user}, dispatch] = useStateValue()

    const logout =  () => {
            signOut(auth)
                .then(() => history.push('/login'))
                .catch((err) => alert(err.message))
    }
    console.log(user);
    return (
        <AppBar className={classes.appBar} position='sticky'>
            <Toolbar className={classes.toolbar}>
                <ImageListItem component={Link} to='/' className={classes.imageListItem} >
                    <img className={classes.imgLogo} src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                </ImageListItem>
                <HeaderInput />
                <ButtonGroup className={classes.buttonGroup} variant='text' color='inherit' >
                    <Button onClick={user ? logout : () => history.push('/login')} className={classes.button}>
                        <Typography className={classes.typography} variant="h6" color="inherit">{user ? user.email : 'Sign in'} </Typography>
                        <Typography className={classes.typography2} variant="h6" color="inherit">Hello {!user && 'Gusts' }</Typography>
                    </Button>
                    <Button onClick={user ? () => history.push('/orders') : () => history.push('/login')} className={classes.button}>
                        <Typography className={classes.typography} variant="h6" color="inherit">Returns</Typography>
                        <Typography className={classes.typography2} variant="h6" color="inherit">& Orders</Typography>
                    </Button>
                    <Button className={classes.button}>
                        <Typography className={classes.typography} variant="h6" color="inherit">Your</Typography>
                        <Typography className={classes.typography2} variant="h6" color="inherit">Prime</Typography>
                    </Button>
                    <IconButton component={Link} to='/basket' className={classes.buttonIcon}>
                        <ShoppingBasket />
                        <span className={classes.span}>{basket.length}</span>
                    </IconButton >
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    )
}

export default Header
