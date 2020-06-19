import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import './form.css'
function ProductForm(props) {
  const [pictures, setPictures] = useState([]);

  const onDrop = (picture) => {
    setPictures([...pictures, picture]);
  };
  console.log(pictures);

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" defaultValue="Name" />
        </label>
        <label>
          Project Description:
          <input type="text" defaultValue="Description" />
        </label>
        <label>
          Used Products:
          <input type="text" defaultValue="Products" />
        </label>
        <label>
          About Products:
          <input type="text" defaultValue="About Products" />
        </label>
        <ImageUploader
          {...props}
          buttonText="Choose Main Project Image"
          withIcon={true}
          withPreview={true}
          onChange={onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
          singleImage={true}
        />
        <ImageUploader
          {...props}
          buttonText="Choose 3 extra images"
          withIcon={true}
          withPreview={true}
          onChange={onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ProductForm;
