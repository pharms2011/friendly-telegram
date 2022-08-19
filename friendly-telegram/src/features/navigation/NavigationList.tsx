import { Button, ButtonGroup } from "@mui/material";

export default function NavigationList() {
    return (
        <ButtonGroup orientation="vertical" variant="contained" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    )
}