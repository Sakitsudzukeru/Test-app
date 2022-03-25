import React, {  useState } from 'react'
import MyNotes from './MyNotes';

export default function MyItemNotes(props) {
    const [post, setPosts] = useState ([
        { id: 1,
            title: "Steve Jobs",
          textnots: "Steve Jobs co-founded Apple Computers with Steve Wozniak.Under Jobs guidance, the company pioneered a series of revolutionary technologies, including the iPhone and iPad."},
          { id: 2,
            title: "Zero to One",
          textnots: "Notes on Startups, or How to Build the Future is a 2014 book by the American entrepreneur and investor Peter Thiel co-written with Blake Masters."},  
        
        ])

 
    return (
      <div>
          { post.map( posts => <MyNotes posts={posts} key={posts.id}/>)}
          
      </div>
    )
  
}
