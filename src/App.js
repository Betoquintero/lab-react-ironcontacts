import './App.css';
import React, {useState} from 'react';
import contactData from "./contacts.json";

function App() {

  const arrContact = [...contactData].slice(0,5)

  const [contacts, setContacts] = useState(arrContact) 

  const restOfContacts = contactData.slice(5)
  
  const handleRandom = () => {
    let randomContact = restOfContacts[Math.floor(Math.random()*restOfContacts.length )]
    const newArr = [...contacts]
    newArr.push(randomContact)
    setContacts(newArr)
  }


  return (
    <div className="App">
    <button className="action-btn" onClick={handleRandom}>Add random</button>
    <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </table>
        {contacts.map(elem => {
        return (
                  <tr key={elem.id} className="table">
                    <td><img width="40px" src={elem.pictureUrl} /></td>
                    <td>{elem.name}</td>
                    <td>{elem.popularity.toFixed(2)}</td>
                  </tr>
        )        
      })}
    </div>
  );
}

export default App;
