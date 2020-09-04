import React, {useState} from 'react';
import Header from './Header'
import Footer from './Footer'
import Note from './Note';
import './../../public/styles.css'

export default function App() {

  return(
    <div> 
      <Header />
      <Note />
      <Footer />
    </div>
  );
}