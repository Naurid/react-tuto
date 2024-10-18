import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>
      Hi, I am {person.name}, {person.age} years old and I am really good at {person.skill}
    </h2>
    </div>
  )
}

export default Person
