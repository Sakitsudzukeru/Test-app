import React from 'react'
import './NewNotes.css';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import MyButton from './button/MyButton';

export default function MyNotes(props) {
  return (
    <div className="post">
        <div className="post-content">
            <strong>{props.posts.title}</strong>
            <div>
           {props.posts.textnots}
            </div>
        </div>
        <div className="post_delete">
            <MyButton className="btn1"><DeleteOutlined /></MyButton>
        </div>
        <div>
            <MyButton className="btn1"><FormOutlined /></MyButton>
            </div> 


    </div>
  )
}

