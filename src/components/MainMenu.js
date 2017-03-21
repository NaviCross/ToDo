import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addToDo, deleteToDo} from '../actions/mainMenu'



class MainMenu extends Component {
    state = {
        value: ''
    };


    render() {
         const todoLi = this.props.todoList.mainMenu.map(list => <li key={list.id}><a onClick={this.handleDelete(list.id)} href="#" >[delete]</a>{list.name}</li>)
         console.log('first',this.props,'2nd', this.props.todoList.mainMenu)


        return (
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                </form>
                <ul>
                    {todoLi}

                </ul>
            </div>
        )

    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const randomId = Date.now()
        this.props.addToDo(this.state.value, randomId)
        this.setState({
            value: ''
        })
    }
    handleDelete =(id)=> (event) => {
        event.preventDefault()
        this.props.deleteToDo(id, this.props.todoList.mainMenu)
    }
}



export default connect((state) => ({
    todoList: state
    }), {
        addToDo,
     deleteToDo
    })(MainMenu)




