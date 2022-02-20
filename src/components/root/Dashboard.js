import React from "react";
import { Col, Row } from "reactstrap";
import ProductList from "../products/ProductList";

const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col xs="12">
          <ProductList />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
