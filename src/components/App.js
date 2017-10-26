import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions';

class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        Hello
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectRecipe: (data) => dispatch(addRecipe(data)),
        remove: (data) => dispatch(removeFromCalendar(data))
    }
}


const mapStateToProps = (calendar) => {
    const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    return {
        calendar: dayOrder.map( day => ({
            day,
            meals: Object.keys(calendar[day]).reduce( (meals, meal) => {
                meals[meal] = calendar[day][meal]
                    ? calendar[day][meal]
                    : null
                return meals
            },{})
        }))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
