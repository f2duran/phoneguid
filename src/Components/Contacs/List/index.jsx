import React, { useState } from 'react'

function List({ contacts }) {
     let [filterText, setFilterText] = useState("");


     //filtereleme islemi
     let filtered = contacts.filter((item) => {//contacts dan gelen veriyi filter metodunda calistir. metod ici fonks yaz filter her defasinda bir item verir
          return Object.keys(item).some((key) => {//obje metodunun keys inde item i gonder. item obje oldugu icin keylerine ayrilir. keyleri fulname ve phone number. bunlardan herhangi biri(some burada ise yariyor) geciyorsa
               console.log("item", item, "key", key);
               return item[key]
                    .toString()
                    .toLowerCase()
                    .includes(filterText.toLocaleLowerCase());//su ifade geciyorsa kismindaki su ifade buradaki filtertext den alinir
          });
     });
     return (
          <>
               <input
                    placeholder='Filter Contact'
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)} />
               <ul className='list'>
                    {filtered.map((e, index) =>
                         <li key={index}>
                              <span>{e.fullname}</span>
                              <span>{e.phone_number}</span>
                         </li>
                    )}
               </ul>
               <p>Total Contacts ({filtered.length})</p>
          </>
     )
}

export default List