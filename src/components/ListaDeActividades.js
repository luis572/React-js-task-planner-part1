import React, { Fragment } from 'react';
import {ActividadCard}  from './ActividadCard';
import Grid from '@material-ui/core/Grid';

export class ListaDeActividades extends React.Component {

    constructor(props) {
        super(props);
        this.state = [
            {   
                "title":"Implement Login view.",
                "description": "some description text ",
                "responsible": {
                    "name": "Santiago Carrillo",
                    "email": "sancarbar@gmail.com"
                },
                "status": "ready",
                "dueDate": 156464645646
            },
           
        ];
    }

    render() {
        return (
            <Fragment>
                <Grid container spacing={32} justify="center">
                    {this.state.map((actividad, i) => {
                        return (
                            <ActividadCard props={actividad} />
                        );
                    })}
                </Grid>
            </Fragment>
        );


    }

}