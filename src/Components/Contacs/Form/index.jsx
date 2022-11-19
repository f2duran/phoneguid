import React, { useState } from 'react'

function Form({ addContact, contacts }) {
     let [form, setForm] = useState({ phone_number: "", fullname: "" });

     let onChangeInput = (e) => {
          setForm({ ...form, [e.target.name]: e.target.value });
     }

     let onSubmit = (e) => {
          e.preventDefault();//form elementinin varsayilan degerlerini siler
          if (form.fullname == "" || form.phone_number == "") {
               return false;
          }
          addContact([...contacts, form])
          setForm({ fullname: '', phone_number: '' });
     }





     return (
          <form onSubmit={onSubmit}>
               <div>
                    <input name='fullname' placeholder='Full Name' value={form.fullname} onChange={onChangeInput} />
               </div>
               <div>
                    <input name='phone_number' placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput} />
               </div>
               <div className='btn'>
                    <button onClick={onSubmit}>Add</button>
               </div>
          </form>
     )
}

export default Form