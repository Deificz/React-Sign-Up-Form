import React, { useEffect, useState } from 'react'
import FirstName from './form compo/FirstName'
import LastName from './form compo/LastName'
import Email from './form compo/Email'
import Password from './form compo/Password'
import Button from './form compo/button'
import {db} from '../config/firebase';
import {doc, collection, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'

export default function Form() {

  const [users, setUsers] = useState([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const getUserCollection = collection(db, 'user_data');

//SET DATA TO DATABASE
  const addNewUser = async (e) =>{
    e.preventDefault();

    await addDoc(getUserCollection, {email: email, first_name: firstName, last_name: lastName, password: password });

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');

    alert('Success');
    location.reload();
    console.table(users);
  }

  //GET DATA FROM DATABASE
  useEffect(() => {
      const getUsers = async () =>{

        const data = await getDocs(getUserCollection);
        setUsers(data.docs.map(doc => 
          ({...doc.data(), id: doc.id})
         ))

      };
      getUsers();
      
  },[]);

  return (
    <>
        <form onSubmit={addNewUser} className='h-fit w-fit flex flex-col justify-center  bg-slate-700 py-10 px-20 rounded-xl'>
            <FirstName setFirstName = {setFirstName} />
            <LastName setLastName = {setLastName}/>
            <Email setEmail = {setEmail}/>
            <Password setPassword = {setPassword}/>
            <Button/>
        </form>
    </>
  )
}
