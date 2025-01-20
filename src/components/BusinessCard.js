import React from 'react';

export default function BusinessCard(props) {
  const {company, team, name, phoneNumber, email } = props.info;

  return (
    <div>
      <div>Company : {company}</div>
      <div>Team : {team}</div>
      <div>Name : {name}</div>
      <div>Phone : {phoneNumber}</div>
      <div>Email : {email}</div>
    </div>
  );
}