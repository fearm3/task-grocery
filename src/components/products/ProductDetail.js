import React from 'react';
import SelectInput from '../toolbox/SelectInput';
import TextInput from '../toolbox/TextInput';

const ProductDetail = ({ categories, product, onSubmit, onChange, errors }) => {
  // console.log(product);

  return (
    <form onSubmit={onSubmit}>
      <h2>{product.id ? 'Update' : 'Add'}</h2>
      <TextInput name='productName' label='Product Name' value={product.productName} onChange={onChange} error={errors.productName} />
      <SelectInput
        name='categoryId'
        label='category'
        value={product.categoryId || ''}
        defaultOption='Select'
        options={categories.map(category => ({
          value: category.id,
          text: category.categoryName
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />
      <TextInput name='unitPrice' label='unit price' value={product.unitPrice} onChange={onChange} error={errors.unitPrice} />
      <TextInput name='quantityPerUnit' label='Quantity Per Unit' value={product.quantityPerUnit} onChange={onChange} error={errors.quantityPerUnit} />
      <TextInput name='unitsInStock' label='Units In Stock' value={product.unitsInStock} onChange={onChange} error={errors.unitsInStock} />
      <button type='submit' className='btn btn-success'>
        Save
      </button>
    </form>
  );
};

export default ProductDetail;
