import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles((theme) => ({
    bannerImg:{
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        objectFit: 'cover',
        maskImage : 'linear-gradient(to bottom, rgba(0,0,0,1) 50% , rgba(0,0,0,0))',
        zIndex: '-1',
        position: 'absolute',
    },
    container:{
       position: 'relative',
        padding: '0 20px'
    }
}))