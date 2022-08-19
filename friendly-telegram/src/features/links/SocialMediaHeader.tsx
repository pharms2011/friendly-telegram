import { IconButton } from "@mui/material"
import { Email, Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

interface Props{
    facebook?: string,
    instagram?: string,
    twitter?: string,
    linkedIn?: string,
    email?: string
}

export default function SocialMedaiHeader(props: Props) {

    return (
        <>
            <IconButton aria-label="facebook" color="secondary">
                <Facebook>
                    <a href={props.facebook}/>
                </Facebook>
            </IconButton>
            <IconButton aria-label="instagram" color="secondary">
                <Instagram>
                    <a href={props.instagram}/>
                </Instagram>
            </IconButton>
            <IconButton aria-label="twitter" color="secondary">
                <Twitter>
                    <a href={props.twitter}/>
                </Twitter>
            </IconButton>
            <IconButton aria-label="linked-in" color="secondary">
                <LinkedIn>
                    <a href={props.linkedIn}/>
                </LinkedIn>
            </IconButton>
            <IconButton aria-label="email" color="secondary">
                <Email>
                    
                </Email>
            </IconButton>
        </>
    )
}