/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React, {FC} from "react";
import {
    Card,
    Grid,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import {Email, GitHub, LinkedIn, SaveAlt} from "@mui/icons-material";

export const About: FC = () => (
    <div css={css`width: 100%`}>
        <Card css={css`
          color: white;
          top: 50%;
          padding-top: 50px;
          background-color: rgba(30, 30, 30, 0.6);
        `}>
            <Card
                elevation={0}
                sx={{bgcolor: "rgba(0,0,0,0)"}}
                css={css`color: inherit;
                  text-align: center;
                  margin-bottom: 16px`}>

                <Typography variant={"h4"}>Hi</Typography>
                <br/>
                <Typography>
                    I work as a backend software engineer at <Link href={"https://blockchain.com"}>Blockchain.com</Link>.
                    <br/>
                    <br/>
                    I enjoy building things, music, bouldering, and kite surfing.
                </Typography>
            </Card>


            <Grid container spacing={0} alignItems={"center"} justifySelf={"center"} direction={"column"}>
                <Grid item xs={8}>
                    <List component={"nav"}>
                        <ListItem disablePadding>
                            <ListItemButton component={"a"} href={"https://github.com/cottand"}>
                                <ListItemIcon><GitHub/></ListItemIcon>
                                <ListItemText>github.com/cottand</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={"a"} href={"mailto:nico@dcotta.eu"}>
                                <ListItemIcon><Email/></ListItemIcon>
                                <ListItemText>nico@dcotta.eu</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={"a"} href={"https://www.linkedin.com/in/ndcotta/"}>
                                <ListItemIcon><LinkedIn/></ListItemIcon>
                                <ListItemText>linkedin.com/in/ndcotta</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={"a"}
                                            href={"https://github.com/Cottand/resume/raw/master/out/nicoDCottaResume.pdf"}>
                                <ListItemIcon><SaveAlt/></ListItemIcon>
                                <ListItemText>download resum??</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>

                </Grid>
            </Grid>
        </Card>
    </div>
);
