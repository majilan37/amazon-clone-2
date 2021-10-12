import { Button, InputBase } from "@mui/material"
import { alpha, styled } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';

function HeaderInput() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        flexGrow: '1',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(1, 2),
        height: '100% !important',
        color: '#222',
        width: '100%',
        borderTopRightRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        background: '#febd69',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer !important',
        [theme.breakpoints.up('xs')]: {
          width: 'auto',
        },
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        flexGrow: '1 !important',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(.3)})`,
          transition: theme.transitions.create('width'),
        },
      }))
    return (
        <Search>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
            <Button variant='text' color='inherit' style={{ padding:0, margin: 0, display: 'block' }}>
              <SearchIconWrapper>
                  <SearchIcon />
              </SearchIconWrapper>
            </Button>
        </Search>
    )
}

export default HeaderInput
