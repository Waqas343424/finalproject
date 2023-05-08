import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { v4 as uuid } from 'uuid';
import {Form, FormGroup, Label, Input} from 'reactstrap';

const Home = () => {
  const [data, setData]=useState(() => {
    return JSON.parse(localStorage.getItem('links')) || []
  });
  const [formData, setFormData]=useState({
    id:'',
    longUrl:'',
    shortUrl:'',
    expiry:''
  });
  const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
  const inputChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData,[name]:value});
  }
  const submitData=(e)=>{
    e.preventDefault();
    const id= small_id;
    const short= `https://shorty/${id}`;
    const save={...formData, id:id, shortUrl:short}
    setData([...data,save]);
  }
  const copyUrl=()=>{
    const shortLink=data[data.length-1].shortUrl;
    navigator.clipboard.writeText(shortLink);
  }
  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(data));
  }, [data]);

  return (
    <>
        <Form action='post'>
        <h2 className="display-6">URL Shorten</h2>
        <FormGroup className="position-relative">
          <Label for="url">Enter URL</Label>
          <Input type='url' placeholder='Enter Valid URL' name="longUrl" value={formData.longUrl} onChange={inputChange} required/>
        </FormGroup>
        <FormGroup className="position-relative">
          <Label for="date">Expiry Date</Label>
          <Input type='date' name="expiry" value={formData.expiry} onChange={inputChange} required/>
        </FormGroup>
          <div className="d-grid">
      <Button variant='success' size='md' onClick={submitData}>Create Short URL</Button>
          </div>
      </Form>
      <Form>
        <h4 className="display-6 text-center">Copy Your Short URL</h4>
      <FormGroup className="position-relative">
        <Input type='text' name="shortUrl" value={data[data.length-1].shortUrl} disabled/>
        <Button variant='info' onClick={copyUrl}>Copy</Button>
      </FormGroup>
      </Form>
    </>
  );
}
export default Home;
