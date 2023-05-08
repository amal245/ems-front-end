import React from 'react';
import './Edit.css';
import { Card, Form, Row,Button } from 'react-bootstrap';
import Select from 'react-select';
function Edit() {
  const option =[ 
    {value:'Active',label:'Active'},
    {value:'InActive',label:'InActive'}

  ]
  return (
    <>
      <div className='container mt-5'>
        <h2 className='text center mt-3'>Update Employee Details</h2>
        <Card className='shadow mt-3 p-3'>
          <div className='text-center  mb-3'>
            <img className='rounded p-1 rounded-circle' width={"50px"} height={'50px'} src="https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png" alt="userpng" />
          </div>
          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="Fname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="fanme" placeholder="First Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="Lname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name='lname' placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="Email Address" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="mobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" name='mobile' placeholder="First Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select Gender</Form.Label>
                <Form.Check
                  type={'radio'}
                  label={"Male"}
                  name='gender'
                  value={'Male'}
                />
                <Form.Check
                  type={'radio'}
                  label={"Female"}
                  name='gender'
                  value={'Female'}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="ok">
                <Form.Label>Select Employee Status</Form.Label>
                <Select  options={option}></Select>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="Choose Profile Picture">
                <Form.Label>Choose Profile Picture</Form.Label>
                <Form.Control type="file" name="user_profile"/>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="Formbasicpic">
                <Form.Label>Enter Employee Location</Form.Label>
                <Form.Control type="text" name="location" placeholder="Enter Employee Location" />
              </Form.Group>
              <Button className='mt-3' variant='primary' type='submit'>Submit</Button>
            </Row>
          </Form>
        </Card>
      </div>
    </>
  )
}

export default Edit