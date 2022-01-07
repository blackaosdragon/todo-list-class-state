import React, {Component} from 'react';
import {FormControl, Input, InputAdornment, TextField} from '@material-ui/core'
import "./todoListF.scss"

//const PersonalTextField = with

export default class TodoList extends Component{
    state = {
        todo: [],
        text: ""
    }
    componentDidMount = () => {
        this.setState({
            count: this.state.todo.length
        })
    }
    handleClickRemove = event => {
        const {textContent} = event.target
        const {id} = event.currentTarget
        if(textContent==='Eliminar'){
            console.log(`Se eliminará la tarea con id ${id}`);
            let todoList = this.state.todo
            todoList.splice(id,1);
            this.setState({
                todo: [...todoList]
            })
        }
        //console.log(id);
        
        //todo = todo.splice(id,1);
        //console.log(todo)
        //console.log(this.state.todo)        
    }
    handleEditText = event => {
        //console.log(event.currentTarget.id)
        //console.log(event.currentTarget.id)
        const {id} = event.target
        //console.log(this.state.todo[id])
        this.state.todo.map( element => {
            //let idInteger = parseInt(element.id);
            if(parseInt(element.id)===parseInt(id)){
                console.log(`Encontre la coincidencia`);
                //set state?
            }
            //console.log(`element.id: ${element.id} id: ${id}`);
            //console.log(typeof(element.id))
            //console.log(typeof(id))
        })
        this.state.todo.find( element => {

        })
    }
    handleClickAdd = () => {
        this.setState({
            count: this.state.count+1
        })
        this.setState({
            todo: [
                ...this.state.todo,
                {
                    id: this.state.count,
                    name: ``,
                    details: ``,
                    weight: ``
                }
            ]
        })
    }
    handleChangeName = event => {
        const {id} = event.target
        let todoList = this.state.todo;
        console.log(event.target)
        console.log(event.currentTarget)
        let newTodoList = todoList.map( element => {
            if(element.id===parseInt(id)){
                console.log(`Id modificado: ${id}`);
                element.id=element.id;
                element.name=event.target.value;
                element.details=element.details;
                return element
            } else {
                return element
            }
        })
        this.setState({
            todo: newTodoList
        })
    }
    handleChangeDescription= (event) => {
        let {id} = event.target;
        let todoList = this.state.todo;
        let newTodoList = todoList.map( element => {
            if(parseInt(id)===element.id){
                element.details = event.target.value;
                return element
            } else {
                return element
            }
        })
        this.setState({
            todo: newTodoList
        })
    }
    handleChange = event => {
        let {id} = event.target;
        let newTodoList = this.state.todo.map( element => {
            if(parseInt(id)===element.id){
                console.log("No funciona mi switch")
                switch (event.target.name) {
                    case "Nombre":
                        console.log("Modifica el nombre");
                        element.name = event.target.value
                        return element
                    case "Description":
                        console.log("Modifica la descripcion");
                        element.details = event.target.value
                        return element
                    case "Peso":
                        console.log("Modifica el peso");                
                        element.weight = event.target.weight
                        return element
                    default:
                        console.log("No se ha modificado nada");
                        return element
                }                
            } else {
                return element
            }            
        })
        this.setState({
            todo: newTodoList
        })
    }
    onChange = event => {
        this.setState({
            text: event.target.value
        })
    }
    render(){
        //console.log(typeof(this.state.todo))
        //console.log(this.state.todo)
        console.log(this.state)
        if(typeof(this.state.todo)==='object'){
            return(
                <div>
                    {/*<TextField value={this.state.text} onChange={this.onChange} />*/}
                    {this.state.todo.map( (element,key) => {
                        return(                            
                            <div className='list-items' id={key} onClick={this.handleClickRemove} name="elemento">
                                <p>{key+1}</p>                                
                                <TextField name="Nombre" id={key} onChange={this.handleChange} value={element.name} label="Nombre"/>
                                <TextField name="Description" id={key} onChange={this.handleChange} value={element.details} label="Descripcion"/>
                                {/*<FormControl>
                                    <Input 
                                      id={key}
                                      name="Peso"
                                      value={element.weight}
                                      onChange={this.handleChange}
                                      endAdornment={<InputAdornment position='end'>Kg</InputAdornment>}
                                      type='number'
                                    />
                                </FormControl>*/}
                                <div className='button-remove' >Eliminar</div>
                            </div>
                        )
                    })}
                    <div className='button-add' onClick={this.handleClickAdd}>Add</div>
                    <div>Estado</div>
                </div>
            )
        } else {
            return(
                <div>
                    {this.state.todo}
                    <div className='button-add' onClick={this.handleClickAdd}>Add</div>
                </div>
            )
        }
        
    }
}