import React, {Component} from 'react';
import Zux from '../../hoc/Zux';


class BurgerBuilder extends Component{
    render(){
        return(
            <Zux>
                <div>Burger</div>
                <div>Build Controls</div>
            </Zux>

        );
    }
}

export default BurgerBuilder;