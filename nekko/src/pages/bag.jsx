// bag.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav2 from './components/nav2';
import Header from './components/header';
import Footer from './components/footer';
import Recommend from './components/recommend';
import './style/bag.css';

function Bag(props) {
  const { id } = useParams(); // This gets the bag ID from the URL.
  const [bagDetails, setBagDetails] = useState(null); // We will store the bag details and images in one state
  const [recommendedArray, setRecommendedArray] = useState([]);

  useEffect(() => {
    // Fetch bag details
    fetch(`http://localhost:3001/api/bag/${id}`)
      .then((res) => res.json())
      .then((details) => {
        // Fetch images for the bag
        fetch(`http://localhost:3001/api/image/${id}`)
          .then((res) => res.json())
          .then((images) => {
            // in json after fetch api has  3 links images, so we need to map the image to show 
            const imageUrls = images.map(img => img.image_data1 || img.image_data2 || img.image_data3);
            // Set the bag details and images in the state
            setBagDetails({ ...details, images: imageUrls.filter(url => url) });
          });
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // Fetch recommended bags
    fetch('http://localhost:3001/api/bag')
      .then(res => res.json())
      .then(allBags => {
        const bagIds = allBags.map(bag => bag.BagID);
        const selectedIds = bagIds.sort(() => 0.5 - Math.random()).slice(0, 4);
        return Promise.all(selectedIds.map(bagId =>
          fetch(`http://localhost:3001/api/bag/${bagId}`)
            .then(res => res.json())
            .then(bagDetails => fetch(`http://localhost:3001/api/image/${bagId}`)
              .then(res => res.json())
              .then(images => {
                const imageObj = images.find(img => img.image_data1 || img.image_data2 || img.image_data3);
                const imageUrl = imageObj
                  ? (imageObj.image_data1 || imageObj.image_data2 || imageObj.image_data3)
                  : null;
                return { ...bagDetails, imageUrl };
              })
            )
        ));
      })
      .then(recommendedBags => {
        // Update state with the recommended bags with images
        setRecommendedArray(recommendedBags);
      })
      .catch(error => {
        console.error('Error fetching bags or images:', error);
      });
  }, [id]);

  if (!bagDetails || bagDetails.images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Nav2 />
      <div className="page-container-bag">
        <section className="product-container">
          <div className="picture-container">
            <div className="pictureList">
              {bagDetails.images && <img src={bagDetails.images[0]} className="img-container" alt={bagDetails.BagName} />}
            </div>
          </div>
          <div className="description-container">
            <article className="catagory-container">{bagDetails.BagCategory}</article>
            <article className="name-container">{bagDetails.BagName}</article>
            <article className="color-container">{bagDetails.BagColor}</article>
            <section className="stock-section">
              <div className="stock">stock</div>
              <article className="stock-container">{bagDetails.BagStock}</article>
            </section>
            <hr className="horizontal-seperator-description" />
            <article className="info">Info</article>
            {bagDetails.BagDescription.split("\n").map((text, index) => <article key={index}>{text}</article>)}
          </div>
        </section>
        <hr className="horizontal-seperator-pink" />
        <section className="recommend-text">You might also like</section>
      </div>
      <Recommend bagsArray={recommendedArray} />
      <Footer />
    </div>
  );
}

export default Bag;
