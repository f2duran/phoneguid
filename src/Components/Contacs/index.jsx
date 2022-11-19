import React, { useState, useEffect } from 'react'
import './styles.css'
import List, { } from './List/index'
import Form, { } from './Form/index'
function Contacts() {
     let [contacts, setContacts] = useState([{ fullname: "furkan duran", phone_number: 5425108875 },
     { fullname: "ayse", phone_number: 123456 }, { fullname: "ahmet", phone_number: 9867534 }]);
     useEffect(() => {
     }, [contacts])
     return (
          <div id="container">
               <h1>Contacts</h1>
               <List contacts={contacts} />
               <Form addContact={setContacts} contacts={contacts} />
          </div>
     )
}

export default Contacts;