import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Badge, Button, Table } from "reactstrap";
import * as productActions from "../../redux/actions/productActions";
// import { successNote } from "../root/CustomToastify";

const ProductList = () => {
  const products = useSelector((state) => state.productListReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, [dispatch]);

  const deleteProduct = (id) => {
    dispatch(productActions.removeProduct(id));
  };

  return (
    <div>
      <h3>
        <Badge color="warning">Products</Badge>
      </h3>
      <Table dark>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category Name</th>
            <th>Unit Price</th>
            <th>Quatity Per Unit</th>
            <th>Units in Stock</th>
            <th>Priority</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <Link
                  to={"/saveproduct/" + product.id}
                  style={{ color: "#fff" }}
                >
                  {product.productName}
                </Link>
              </td>
              <td>{product.categoryName}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
              <td>{product.priority}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
