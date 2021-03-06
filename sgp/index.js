
import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';


import jwt from "jsonwebtoken"


import {useRouter} from 'next/router'

export default function Index() {



  const [identificacion, setIdentificacion] = useState('');
  const [password, setPassword] = useState('');
 const [message, setMessage] = useState('No estas logeado');

 const router  = useRouter();

const handleSubmit =async (e) => {
    e.preventDefault();
    const data = {
      identificacion,
      password,
    };
    //console.log(data); //mostrar en navegador
    //http://localhost:8080/user
    //http://localhost:8000/api/login
    ///api/login

    const res = await fetch('api/login', {
        method: 'post',

       //headers:{"Content-Type":"application/json"}, //pendiente
       //headers: {"Content-Type": "application/json" },


        body: JSON.stringify(data),
    }).then((t) => t.json())

    const token = res.token;
    if(token){

      var json = jwt.decode(token);
      //const body = JSON.parse(json); //no funciona
      console.log(json); //guardar 

      localStorage.setItem("userData",JSON.stringify(json)) ////
      //parsear el json
      console.log(JSON.parse(localStorage.getItem("userData")));



      //router.push('/inicio');
      setMessage("Bienvenido " + json.id +" que naciste "+json.years+" gracias!");
      

    }else{

      setMessage("algo salio mal");
    }

  };

    return (


    <div>
      <Head>
        <title>Ingresar al sistema</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form onSubmit={handleSubmit} className={styles.form}>
         <p>{message}</p>
          <label htmlFor="identificacion">ID:</label>
          <input
            id="identificacion"
            type="text"
            onChange={e => setIdentificacion(e.target.value)}
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Ingresar</button>
        </form>
      </main>
    </div>

      /*
       <div>
          <Head>
            <title>Clinica internacional - SGP</title>
          </Head>          
          <div>
            <p className="test">aqui estaria el login</p>
            <form action="POST" action="api/login">
              <input type="text" name="identificacion" defaultValue="admin" placeholder="ID"/>
              <br/>
              <input type="password" name="password" defaultValue="admin" placeholder="Contraseña"/>
              <input type="submit" value="Login"/>
            </form>
          </div>
       
      </div> */
  );


    
}

/*


    <div>
      <Head>
        <title>Ingresar al sistema</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="identificacion">ID:</label>
          <input
            id="identificacion"
            type="text"
            onChange={e => setIdentificacion(e.target.value)}
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Ingresar</button>
        </form>
      </main>
    </div>


*/












/*


  headers: {
           "Content-Type": "application/json"
          },


*/




/*
import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

//import Navigation from './navigation'
import Navigation from '../components/navigation'

import { useState } from 'react';


export default function Login(){

  const handleSubmission = async () => {
    
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');


     


         const res = await fetch("/api/login", {
          method: "POST",
          headers: {
           "Content-Type": "application/json"
          },
          body: JSON.stringify(info)
         });

    const data = await res.json();
    console.log(data)  


  }

  return (   
       <div>
          <Head>
            <title>Clinica internacional - SGP</title>
          </Head>          
          <div>
            <p className="test">aqui estaria el login</p>
            <form action="POST" action="api/login">
              <input type="text" name="username" placeholder="Nombre de usuario"/>
              <br/>
              <input type="password" name="password" placeholder="Contraseña"/>
              <input type="submit" onClick={handleSubmission} value="Login"/>
            </form>
          </div>
       
      </div>
  )
}


*/

/*

export default function Home() {

  const handleSubmission = async () => {
    const info = {
      name: "Kieran",
      age: 26
    }

    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    });

    const data = await res.json();
    console.log(data) // { message: "success" }
  }

  return (
    <div>
      <button onClick={handleSubmission}>
        Hit Route
      </button>
    </div>
  )
}
*/




/*
import React, {SyntheticEvent, useState} from 'react';
//import Layout from "../layouts/Layout";
import Head from "next/head";
import {useRouter} from "next/router";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        await router.push('/');
    }

    return (
        <Layout>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <input type="email" className="form-control" placeholder="Email" required
                       onChange={e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control" placeholder="Password" required
                       onChange={e => setPassword(e.target.value)}
                />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </Layout>
    );
};

export default Login;
*/

