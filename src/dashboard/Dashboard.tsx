import React from "react";
import Bar from "./Bar";
import Inputs from "./Inputs";
import FolderList from "./FolderList";
import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const Dashboard = () => {
    return(
        <>
            <Bar />
            <Inputs />
            <Fab color="primary" aria-label="add" size={"small"}>
                <AddIcon />
            </Fab>
            <FolderList />
        </>
    )
}
export default Dashboard;