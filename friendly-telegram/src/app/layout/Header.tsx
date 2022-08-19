import { AppBar, Box, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SocialMedaiHeader from "../../features/SocialMediaHeader/SocialMediaHeader";

interface Props {
    toggleDarkMode: () => void;
    isDark: boolean;
}

// const midLinks = [

// ]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
]

export default function Header(props: Props) {
    return (
        <>
            <AppBar position='static' sx={{ mb: 4 }}>
                <Toolbar>
                    <Box>
                        <Typography 
                        variant='h4' 
                        className='name'
                        sx={{
                            fontFamily: 'Square Peg'
                        }}>
                            Mikal Williams
                        </Typography>
                        <Switch
                            checked={props.isDark}
                            onChange={props.toggleDarkMode}
                        />
                        <SocialMedaiHeader />
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
} 