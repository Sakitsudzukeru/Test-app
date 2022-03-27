import React, { useState } from 'react'
import MyButton from './button/MyButton'
import MyInput from './input/MyInput'
import MyTextarea from './textarea/MyTextarea';
import { PlusCircleOutlined } from '@ant-design/icons';


export default function NewNotes({ create }) {
  const [notes, setNotes] = useState({ title: '', textnots: '' })

  const addNewNotes = (e) => {
    e.preventDefault()

    const NewNots = {
      ...notes, id: Date.now()
    }
    create(NewNots)
    setNotes({ title: '', textnots: '' })
  }

  return (
    <div>
      <form className="new">

        <h4 style={{ textAlign: "center" }}>Добавить заметку</h4>

        <MyInput
          value={notes.title}
          onChange={e => setNotes({ ...notes, title: e.target.value })}
          className="btn3"
          placeholder="Заголовок"
        />
        <hr style={{ width: "365px" }} />
        <MyTextarea
          value={notes.textnots}
          onChange={e => setNotes({ ...notes, textnots: e.target.value })}
          className="btn3"
          placeholder="Текст" />

        <MyButton
          onClick={addNewNotes}
          type="submit" className="btn3"><PlusCircleOutlined /></MyButton>
      </form>

    </div>
  )
}
