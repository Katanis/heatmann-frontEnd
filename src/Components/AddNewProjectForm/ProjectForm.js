import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import './form.css';
import axios from 'axios';
function ProductForm(props) {
  const [mainPicture, setMainPicture] = useState(null);
  const [pictures, setPictures] = useState([]);
  const [name, setName] = useState('Name');
  const [description, setDescription] = useState('Description');
  const [address, setAddress] = useState('Address');
  const [used, setUsed] = useState('Used products');
  const [about, setAbout] = useState('About products');
  const prefix = 'http://18.189.49.66:3000/users';
  const config = {
    headers: {
     'content-type': 'multipart/form-data'
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('mainPicture', mainPicture);
    console.log(formData);
    axios
      .post(
        prefix + '/api/add_project',
        formData, {
          onUploadProgress: progressEvent => {
            console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%');
          }
        }
      )
      .then((response) => {
        alert(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const onDrop = (picture) => {
    setPictures([...pictures, picture]);
  };

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Project Description:
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
          />
        </label>
        <label>
          Project Address:
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            type="text"
          />
        </label>
        <label>
          Used Products:
          <input
            onChange={(e) => setUsed(e.target.value)}
            value={used}
            type="text"
          />
        </label>
        <label>
          About Products:
          <input
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            type="text"
          />
        </label>
        <input type="file" name="mainPicture" onChange= {e => setMainPicture(e.target.files[0])} />
        {/* <ImageUploader
          type="file"
          name="mainPicture"
          {...props}
          buttonText="Choose Main Project Image"
          withIcon={true}
          withPreview={true}
          onChange={e => setMainPicture(e)}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
          singleImage={true}
        />
        <ImageUploader
          {...props}
          type="file"
          buttonText="Choose 3 extra images"
          withIcon={true}
          withPreview={true}
          onChange={onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        /> */}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default ProductForm;
