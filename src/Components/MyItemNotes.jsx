import React, { useState, useMemo} from 'react'
import MyNotes from './MyNotes';
import NewNotes from './NewNotes';
import SearchNotes from './SearchNotes';

export default function MyItemNotes(props) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Steve Jobs",
      textnots: "Steve Jobs co-founded Apple Computers with Steve Wozniak.Under Jobs guidance, the company pioneered a series of revolutionary technologies, including the iPhone and iPad."
    },
    {
      id: 2,
      title: "Zero to One",
      textnots: "Notes on Startups, or How to Build the Future is a 2014 book by the American entrepreneur and investor Peter Thiel co-written with Blake Masters."
    },

  ])
 ////const [searchs, setSearchs] =useState({query:''})

 
 //// const NotesSearch = useMemo( ()=> {
    
    ////searchs(notes=>notes.title.toLowerCase().includes(searchs.query.toLocaleLowerCase()))
 //// }, [searchs.query, posts])

  const createNotes =(NewNots)=> {
    setPosts([...posts, NewNots])
  }

  return (
    <div>
    
      <NewNotes create={createNotes}  />
      {posts.map(post => <MyNotes post={post} key={post.id} />)}

    </div>
  )

}
