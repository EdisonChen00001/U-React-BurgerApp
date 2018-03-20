import React, {Component} from 'react';
import Zux from '../../hoc/Zux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    render(){
        return(
            <Zux>
                <Burger/>
                <div>Build Controls</div>
            </Zux>

        );
    }
}

export default BurgerBuilder;