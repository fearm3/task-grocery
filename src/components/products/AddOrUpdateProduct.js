import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as productActions from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";

//! ...props --> extends props
const AddOrUpdateProduct = ({
  products,

  getProducts,

  saveProduct,
  ...props
}) => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  //! validation
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  //! with useParams get  product ids
  const { productId } = useParams();
  // console.log(productId);
  //! useSelector ve find  methods to find update product
  const items = useSelector((state) => state.productListReducer);
  const item = productId && items.find((item) => item.id === productId);
  // console.log(item);

  useEffect(() => {
    //! add or update
    item !== undefined && setProduct(item);
  }, [item]);

  const handleChange = (event) => {
    const { name, value } = event.target; //! event destructuring
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
    //! validation
    validate(name, value);
  };

  //! validation
  function validate(name, value) {
    if (name === "productName" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "Product name is required",
      }));
    } else {
      setErrors("");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(productActions.saveProductAPI(product));
    // navigate(-1); //! go back
    navigate("/", { replace: true });
  };
  //! my category as a hardcoded!
  const categories = [
    {
      id: 1,
      categoryName: "Vegetables",
      seoUrl: "vegetables",
    },
    {
      id: 2,
      categoryName: "Fruits",
      seoUrl: "fruits",
    },
    {
      id: 3,
      categoryName: "Seafood",
      seoUrl: "seafood",
    },
  ];

  return (
    <div>
      <ProductDetail
        product={product}
        categories={categories}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default AddOrUpdateProduct;
