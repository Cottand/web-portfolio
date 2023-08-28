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
          //color: white;
          top: 50%;
          padding: 50px;
          border-bottom-color: rgba(198,79,49, 0.9);
          border-width: 10px;
          border-radius: 0px;
        `}>
            <Card
                sx={{
                    bgcolor: "rgba(0,0,0,0)"
            }}
                css={css`
                  text-align: center;
                  margin-bottom: 50px
`}>

                <Typography variant={"h4"}>Hi</Typography>
                <br/>
                <Typography fontSize={20}>
                    I work as a backend software engineer at <Link href={"https://blockchain.com"}>Blockchain.com</Link>.
                    <br/>
                    <br/>
                    I enjoy building things, music, bouldering, and kite surfing.
                </Typography>
            </Card>


            <Grid container spacing={0}
                  alignItems={"center"}
                  justifySelf={"center"}
                  direction={"column"}>
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
                                <ListItemText>download resumé</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>

                </Grid>
            </Grid>
        </Card>
    </div>
);
