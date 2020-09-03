import React from 'react';

default export function Footer(){
  const year = new Date().getFullYear();
  return(
    <div>
      <p>All Rights Reserved - © {year} Haris Hamzic</p>
    </div>
  );
}