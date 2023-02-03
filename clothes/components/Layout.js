import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FlexBox } from "./wrapper/Flexbox";
import { AppBar, Toolbar, Typography, Container, Grid, Button, } from "@mui/material";
import { useRouter } from "next/router";
import useStyles from "../utils/styles"

export default function Layout({ title, description, children }) {
    const style = useStyles()
    const router = useRouter()
    return (
        <div>
            <Head>
                <title> {title? `${title} | La Victoire` : "La Victoire"}</title>
            {description && <meta name="description" content={description}></meta>}
            </Head>
            <AppBar position="static" className={style.navbar}>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={11}>
                            <Link href="/" passHref>
                                <Typography className={style.brand}>La Victoire</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={1}>
                            <FlexBox sx={{ justifyContent: "center", gap: 4, mt:1 }}>
                                <Button variant="contained" color="warning" onClick={()=> {router.push('/cart')}}>
                                    Cart
                                </Button>
                                <Button variant="contained" color="warning" onClick={()=> {router.push('/login')}}>
                                    Login
                                </Button>
                            </FlexBox>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Container className={style.main}>
                {children}
            </Container>
            <footer className={style.footer}>
                <Typography sx={{ mt:4 }}>
                    Created @February 2023
                </Typography>
            </footer>
        </div>
    );
}
