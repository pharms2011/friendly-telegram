import { AppBar, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
    toggleDarkMode: () => void;
    isDark: boolean;
}

// const midLinks = [

// ]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'}
]

export default function Header(props: Props) {
    return (
        <>
            <AppBar position='static' sx={{ mb: 4 }}>
                <Toolbar>
                    <Typography variant='h6'>
                        Mikal Williams
                    </Typography>
                    <Switch
                        checked={props.isDark}
                        onChange={props.toggleDarkMode}
                    />
                    {/* <List sx={{display:'flex'}}>
                        {midLinks.map(({title, path})=>(
                            <ListItem 
                                key={title}
                                component={NavLink}
                                to={path}
                                sx={{color: 'inherit', typography:'h6'}}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List> */}
                    <List sx={{display:'flex'}}>
                        {rightLinks.map(({title, path})=>(
                            <ListItem 
                                key={title}
                                component={NavLink}
                                to={path}
                                sx={{color: 'inherit', typography:'h6'}}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Toolbar>
            </AppBar>
        </>
    )
} 