import React from 'react'
import Person from './Components/Person';

function NameList() {
  const persons = [
    {
      id: 0,
      name: "Gabor",
      age: 27,
      skill: "chomage",
    },
    {
      id: 1,
      name: "Hamza",
      age: 20,
      skill: "kebap",
    },
    {
      id: 2,
      name: "Momo",
      age: 10,
      skill: "arab",
    },
  ];
  const personList = persons.map((person) => <Person key = {person.id} person = {person}></Person>);
  return <div>{personList}</div>;
}

export default NameList;
