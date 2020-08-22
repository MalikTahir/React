import React, {Component} from 'react';
//import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';

import {Renderdish, Rendercomments} from './Dishdetailcomponent';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedDish: null
    }
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish});
  }
  render() 
  // {
  //     return(
  //   {this.props.dishes.map(dish => {
  //     return (
  //       <div key={dish.id} className="col-12 col-md-5 m-1">
  //         <Card onClick={() => this.onDishSelect(dish)}>
  //           <CardImg width="100%" src={dish.image} alt={dish.name} />
  //           <CardImgOverlay className="ml-5">
  //             <CardTitle>{dish.name}</CardTitle>
  //           </CardImgOverlay> 
  //         </Card>
  //       </div>
  //     );
  //   })
  //   }
  //   )
  // }
}

export default Menu;
