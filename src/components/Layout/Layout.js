import React from 'react';
import Zux from '../../hoc/Zux';
import classes from './Layout.css';

const layout = (props) => (
   <Zux>
        <div>
            Toolbar SideDrawer , Backdrop
        </div>
        <main className ={classes.Content}>
            {props.children}
        </main>
    </Zux>
);

export default layout;