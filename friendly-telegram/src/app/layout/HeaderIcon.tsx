import { ListItem } from "@mui/material";
import { Component } from "react";
import { NavLink } from "react-router-dom";

interface Props {
    icon: Icon;
}

interface Icon {
    key: string;
    path: string;
    title: string;
    iconPath?: String
}

export default function HeaderIcon(props:Props){
    var icon = props.icon;
    return(
        <ListItem 
                                key={icon.title}
                                component={NavLink}
                                to={icon.path}
                                sx={{color: 'inherit', typography:'h6'}}
                            >
                                {icon.title.toUpperCase()}
                            </ListItem>
    )
}