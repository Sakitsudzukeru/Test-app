import React, { Component } from 'react'
import { PlusCircleOutlined } from '@ant-design/icons';
import './NewNotes.css';
import MyButton from './button/MyButton'
import MyInput from './input/MyInput'
import MyTextarea from './textarea/MyTextarea';



export default class NewNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          text: "",
          notes: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
      
      handleSubmit(event) {
        event.preventDefault();
        let nots = {
          title: this.state.title,
          text: this.state.text
        }
        let arr = this.state.notes
        arr.unshift(nots)
        this.setState({notes: arr})
        this.setState({...this.state, title: ""})
        this.setState({...this.state, text: ""})
      }

      renderNotes() {
        return this.state.notes.map((nots) => {
          return (
            <div >
              <div >
                <h3 >{nots.title}</h3>
                <p >{nots.text}</p>
              </div>
            </div>
          )
        })
      }

    render() {
        return (
          <div className="new">
           
         
            <form className="form" onSubmit={this.handleSubmit}>
              <div >
              <h4 style={{ textAlign: "center" }}>Добавить заметку</h4>
                <MyInput  
                name="title" 
                value={this.state.title} 
                onChange={this.handleChange} 
                className="btn2" 
                placeholder="Заголовок" />
              </div>
              <div>
              <hr style={{ width: "350px" }} />
                <MyTextarea
                className="btn2" 
                name="text" 
                value={this.state.text} 
                onChange={this.handleChange} 
                id="exampleFormControlTextarea1" 
                placeholder="Текст" 
               ></MyTextarea>
              </div>

              <MyButton type="submit" className="btn2"><PlusCircleOutlined /></MyButton>
            </form>
         
            <div>
              {this.renderNotes()}
            </div>
          </div>
        )
      }}