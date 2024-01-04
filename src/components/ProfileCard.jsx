import React, { useState } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth, faHeart, faHome, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const ProfileCard = ({ id,imageUrl, name, description, mobilite, location: profileLocation, age, interests }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [liked, setLiked] = useState(0);
  const profileInfoId = `profile-info-${id}`;
  const handleToggle = () => {
    setShowInfo(!showInfo);
  };

  return (
    <Card className="ProfileCard">
      <Card.Img variant="top" className='card-img' src={imageUrl} alt={`${name}'s photo`} />
      <Card.Body>
        <h4>{name}</h4>
        <Card.Text>{description}</Card.Text>
        <Card.Text><FontAwesomeIcon icon={faEarth}/> {mobilite}</Card.Text>
        <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Col lg="7">
            <Button
              className='btn-info'
              variant="secondary"
              onClick={handleToggle}
              aria-controls={profileInfoId}
              aria-expanded={showInfo}
            >
              {showInfo ? 'Hide Information' : 'Show Information'}
            </Button>
          </Col>
          <Col className='cardicon'>
            <FontAwesomeIcon
              icon={faHeart}
              className='icon-like'
              onClick={() => setLiked(liked<=100 ? liked+1 : 0)}
            />
            <span className="icon-title">{liked}</span>
          </Col>
        </Row>
        <div className={`card-info collapse ${showInfo ? 'show' : 'false'}`} id="profile-info">
          <p>
            <strong>Location:</strong> {profileLocation}
          </p>
          <br />
          <p>
            <strong>Age:</strong> {age}
          </p>
          <br />
          <p>
            <strong>Skills:</strong> {interests.join(', ')}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
