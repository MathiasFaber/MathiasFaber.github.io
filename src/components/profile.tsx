
import * as React from 'react';
import Box from '@mui/material/Box';

import image from '../assets/PB.jpg'
import pepe from '../assets/pepe.png'

import { Grid } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SchoolIcon from '@mui/icons-material/School';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const Profile = () => {

    return (
        <Grid>
            <h1 style={{ textAlign: 'center' }}>Mathias Faber Kristiansen</h1>
            <Grid container>
                <Grid xs={1} />
                <Grid item xs={5} spacing={2} border={1}>
                    <Grid style={{ textAlign: 'center' }}>
                        <img
                            src={pepe}
                            alt=''
                            width='75%'
                            style={{ borderRadius: '100%', textAlign: 'center' }}
                        />
                    </Grid>
                    <Grid style={{ display: 'flex', alignItems: 'center' }}>
                        <Grid xs={3} textAlign={'right'} style={{ marginRight: 20 }}>
                            <BadgeIcon fontSize={'large'} />
                        </Grid>
                        <Grid xs={9} >
                            <h4>Mathias Faber Kristiansen</h4>
                        </Grid>
                    </Grid>
                    <Grid style={{ display: 'flex', alignItems: 'center' }}>
                        <Grid xs={3} textAlign={'right'} style={{ marginRight: 20 }}>
                            <HomeIcon fontSize={'large'} />
                        </Grid>
                        <Grid xs={9}>
                            <h4>Frederiksberg, 2000</h4>
                        </Grid>
                    </Grid>
                    <Grid style={{ display: 'flex', alignItems: 'center' }}>
                        <Grid xs={3} textAlign={'right'} style={{ marginRight: 20 }}>
                            <SmartphoneIcon fontSize={'large'} />
                        </Grid>
                        <Grid xs={9}>
                            <h4>+45 60 70 05 12</h4>
                        </Grid>
                    </Grid>
                    <Grid style={{ display: 'flex', alignItems: 'center' }}>
                        <Grid xs={3} textAlign={'right'} style={{ marginRight: 20 }}>
                            <SchoolIcon fontSize={'large'} />
                        </Grid>
                        <Grid xs={9}>
                            <h4>Studying a Master in Software Design (Cand.IT)</h4>
                        </Grid>
                    </Grid>
                    <Grid style={{ display: 'flex', alignItems: 'center' }}>
                        <Grid xs={3} textAlign={'right'} style={{ marginRight: 20 }}>
                            <AlternateEmailIcon fontSize={'large'} />
                        </Grid>
                        <Grid xs={9}>
                            <h4>Mafaber@hotmail.dk</h4>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5} spacing={2} border={1} textAlign={'center'}>
                    <h2>grid2</h2>
                </Grid>
                <Grid xs={1} />
            </Grid>
        </Grid>
    )
}