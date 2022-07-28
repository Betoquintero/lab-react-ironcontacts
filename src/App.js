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

  const handlePopularity = () => {
    let orderPopularity = [...contacts].sort((a,b) => b.popularity - a.popularity)
    setContacts(orderPopularity)
  }

  const handleNameSort = () => {
    let orderedNames = [...contacts].sort((a,b) => a.name.localeCompare(b.name))
    setContacts(orderedNames)
  }

  const handleDelete = contactId => {
    let deletingContact = contacts.filter(elem =>{
      return elem.id !== contactId
    })
    setContacts(deletingContact)

  }


  return (
    <div className="App">
    <button className="action-btn" onClick={handleRandom}>Add random</button>
    <button className="action-btn" onClick={handleNameSort}>Sort by name</button>
    <button className="action-btn" onClick={handlePopularity}>Sort Popularity</button>    
    <table className="table">
        <tr className="tableHeadings">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
      </table>
        {contacts.map(elem => {
          const oscarWin=elem.wonOscar && <span>🏆</span>
          const emmyWin=elem.wonEmmy && <span>🏆</span>
        return (
                  <tr key={elem.id} className="contacts">
                    <td className="contactImage"><img  width="50px" src={elem.pictureUrl} /></td>
                    <td className="contactName">{elem.name}</td>
                    <td className="contactPopularity">{elem.popularity.toFixed(2)}</td>
                    <td className="contactOscar">{oscarWin}</td>
                    <td className="contactEmmy">{emmyWin}</td>
                    <td><button className="action-btn" onClick={() => handleDelete(elem.id)}>Delete</button></td>
                  </tr>
        )        
      })}
    </div>
  );
}

export default App;
