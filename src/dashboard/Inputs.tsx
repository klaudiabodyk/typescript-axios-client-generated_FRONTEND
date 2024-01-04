import Input from "@mui/joy/Input";
import { TextField } from "@mui/material";
import React from "react";

const Inputs = () => {
    return (
        <>
            <Input
                color="primary"
                placeholder="Nazwa"
                size="lg"
                variant="soft"

            />
            <TextField
                multiline
                rows={6}
                defaultValue="Domyślny tekst"
                variant="outlined"
            />

        </>
    )
}
export default Inputs;