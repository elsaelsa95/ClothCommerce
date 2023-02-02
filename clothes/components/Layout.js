import React from "react";
import Head from "next/head";
import { AppBar, Toolbar, Typography, Container} from "@mui/material";
import useStyles from "../utils/styles"

export default function Layout({children}) {
    const style = useStyles()
    return (
        <div>
            <Head>
                <title> La Victoire</title>
            </Head>
            <AppBar position="static" className={style.navbar}>
                <Toolbar>
                    <Typography>La Victoire</Typography>
                </Toolbar>
            </AppBar>
            <Container className={style.main}>
                {children}
            </Container>
            <footer className={style.footer}>
                <Typography>
                    Created @January 2023
                </Typography>
            </footer>
        </div>
    );
}
