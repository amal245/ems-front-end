import React from 'react';
import './Profile.css';
import { Card, Row } from 'react-bootstrap';

function Profile() {
  return (
    <>
    <div className='container'>
      <Card className='shadow col-lg-6 mx-auto mt-5'>
        <Card.Body>
          <Row>
            <div className='col'>
              <div  className='profile_image d-flex justify-content-center'>
              <img className='rounded p-1 rounded-circle' width={"250px"} height={'250px'} src="https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png" alt="userpng" />

              </div>
            </div>
          </Row>
          <div className='text-center mt-3'>
            <h3>Max Miller</h3>
            <h5><i className="fa-solid fa-envelope text-primary"></i>:- <span>max@gmail.com</span>
            </h5>
            <h5><i class="fa-solid fa-mobile-screen-button text-success"></i>:- <span>9061903865</span>
            </h5>
            <h5><i class="fa-solid fa-user text-info"></i>:- <span>Male</span>
            </h5>
            <h5><i class="fa-sharp fa-solid fa-location-dot text-danger"></i>:- <span>Brookyln</span>
            </h5>
            <h5><i class="fa-solid fa-chart-line text-warning"></i>:- <span>Active</span>
            </h5>

          </div>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default Profile