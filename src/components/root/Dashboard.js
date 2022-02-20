import React from 'react';
import { Col, Row } from 'reactstrap';
import CategoryList from '../categories/CategoryList';
import ProductList from '../products/ProductList';

const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col xs='3'>
          <CategoryList />
        </Col>
        <Col xs='9'>
          <ProductList />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
