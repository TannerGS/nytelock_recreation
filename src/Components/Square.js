import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

import '../App.css';

const Square = ({logo, title}) => {
    return (
      <Card className="square-card" body inverse style={{ backgroundColor: '#5a5a5a', borderColor: '#8d8d8d', borderRadius: 10 }}>
          <CardBody>
              <CardTitle tag="h5" className="square-card-logo">{logo}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 square-card-text">{title}</CardSubtitle>
          </CardBody>
      </Card>
                
    )
}

export default Square;