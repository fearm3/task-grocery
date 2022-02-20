import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, ListGroup, ListGroupItem } from 'reactstrap';
import * as categoryActions from '../../redux/actions/categoryActions';
import * as productActions from '../../redux/actions/productActions';

const CategoryList = props => {
  // console.log(props);
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoryListReducer);
  const currentCategory = useSelector(state => state.changeCategoryReducer);

  //! useEffect ile dispacth ettiğimiz categoryName'leri categories olarak çekiyoruz.
  useEffect(() => {
    dispatch(categoryActions.getCategories());
    // props.actions.getCategories();
  }, []);

  const selectCategory = category => {
    dispatch(categoryActions.changeCategory(category));
    // props.actions.changeCategory(category);
    //! categoryId parametre olarak gönderiyoruz. ProducList'de sadece o kategoriye ait ürünleri listelemek için
    dispatch(productActions.getProducts(category.id));
    // props.actions.getProducts(category.id);
  };

  return (
    <div>
      <div>
        <h3>
          <Badge color='warning'>Categories</Badge>
        </h3>
      </div>
      <ListGroup>
        {categories.map(category => (
          //! active -> background = blue
          <ListGroupItem active={category.id === currentCategory.id ? true : false} key={category.id} onClick={() => selectCategory(category)}>
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     //! currentCategory --> state içerisinden changeCategoryReducer'a map et
//     currentCategory: state.changeCategoryReducer
//     categories: state.categoryListReducer
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: {
//       //! bu fonk ile categories içine verileri atıyoruz. useEffect kullanıyoruz.
//       getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
//       //! changeCategory ile category'e tıkladığımız zaman currentCategory'e atama yapıyoruz.
//       changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
//       //! producList componentinde id'ye göre seçili ürünleri listelemek için burada da çağırmamız gerekir.
//       getProducts: bindActionCreators(productActions.getProducts, dispatch)
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryList;
