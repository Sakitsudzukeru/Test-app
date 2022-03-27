import React from 'react'
import './NewNotes.css';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import MyButton from './button/MyButton';

export default function MyNotes(props) {
  return (
    <div className="post">
        <div className="post-content">
            <strong>{props.post.title}</strong>
            <div>
           {props.post.textnots}
            </div>
        </div>
        <div className="post_delete">
          
        </div>
        <div>
          
            </div> 


    </div>
  )
}

