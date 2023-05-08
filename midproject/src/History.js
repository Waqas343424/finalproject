import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Input } from 'reactstrap';

const History = () => {
  const [links, setLinks] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [date,setDate]=useState('');

useEffect(() => {
  const links = JSON.parse(localStorage.getItem('links'));
  if (links) {
   setLinks(links);
  }
}, [links]);
const inputActive = () => {
  setIsActive(!isActive);
};
const handleUpdate=(id)=>{
  const newExpiry = links.map(item => {
    if (item.id === id) {
      return {
        ...item,
        expiry: date
      };
    } else {
      return item;
    }
  });
  localStorage.setItem('links', JSON.stringify(newExpiry));
}
const handleDelete= (id) => {
  const newLink = links.filter((item) => item.id !== id);
  setLinks(newLink);
  localStorage.setItem('links', JSON.stringify(newLink));
};
const copyUrl=(data)=>{
  navigator.clipboard.writeText(data);
}

  return (
    <>
    <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>URL</th>
        <th>Short URL</th>
        <th>Expiry Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {links.map((link, key) => (
        <tr key={key}>
          <td>{key+1}</td>
          <td>{link.longUrl}</td>
          <td>{link.shortUrl}</td>
          <td className='update'><Input type='date' className='text-center' name="shortUrl" value={link.expiry} onChange={(e)=>setDate(e.target.value)} disabled={!isActive}/><Button className='table_btn' variant="success" size='sm' onClick={()=>handleUpdate(link.id)}>Save</Button></td>
          <td>
            <Button className='table_btn' variant="primary" size='sm' onClick={()=>copyUrl(link.shortUrl)}>Copy</Button>
            <Button className='table_btn' variant="info" size='sm' onClick={inputActive}>Edit</Button>
            <Button className='table_btn' variant="success" size='sm' onClick={()=>handleDelete(link.id)}>Delete</Button>
          </td>
      </tr>
      ))}
    </tbody>
  </Table>
    </>
  )
}
export default History;