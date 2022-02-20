import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as categoryActions from '../../redux/actions/categoryActions';
import * as productActions from '../../redux/actions/productActions';
import ProductDetail from './ProductDetail';

//! ...props --> mevcut propları genişletiyoruz.
const AddOrUpdateProduct = ({ products, categories, getProducts, getCategories, saveProduct, ...props }) => {
  const categoryList = useSelector(state => state.categoryListReducer);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  //! validation
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  //! useParams ile product id'yi alıyoruz.
  const { productId } = useParams();
  // console.log(productId);
  //! useSelector ve find metodlarını kullanarak update edilecek product'ı buluyoruz.
  const items = useSelector(state => state.productListReducer);
  const item = productId && items.find(item => item.id == productId);
  // console.log(item);

  useEffect(() => {
    if (categoryList.length === 0) {
      dispatch(categoryActions.getCategories());
    }
    //! add or update
    item !== undefined && setProduct(item);
  }, [item]);

  const handleChange = event => {
    const { name, value } = event.target; //! eventin içerisindeki name ve value değerlerini destructuring yapıyoruz.
    setProduct(previousProduct => ({
      ...previousProduct,
      [name]: name === 'categoryId' ? parseInt(value, 10) : value //! categoryId inputu ise numbera çevir yoksa gerek yok.
    }));
    //! validation
    validate(name, value);
  };

  //! validation
  function validate(name, value) {
    if (name === 'productName' && value === '') {
      setErrors(previousErrors => ({ ...previousErrors, productName: 'Product name is required' }));
    } else {
      setErrors('');
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(productActions.saveProduct(product));
    // navigate(-1); //! bir önceki sayfaya gider
    navigate('/', { replace: true });
  };

  return (
    <div>
      <ProductDetail product={product} categories={categoryList} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </div>
  );
};

export default AddOrUpdateProduct;
