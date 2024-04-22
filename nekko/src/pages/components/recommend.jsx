import React from 'react';
import './com_style/recommend.css';
import { Link } from 'react-router-dom';

function Recommend({ bagsArray }) {
    if (!bagsArray || bagsArray.length === 0) {
        return <div>Loading...</div>; // Or any other placeholder
    }

    return (
        <div className="component-container">
          <section className="recommended-container">
            {bagsArray.map(bag => (
              <Link key={bag.BagID} className="recommended-bag-container" to={`/bag/${bag.BagID}`} state={bag}>
                {bag.imageUrl && <img src={bag.imageUrl} className="img-container" alt={bag.BagName} />}
                <div className="description-container">
                  <div className="name">{bag.BagName}</div>
                  <div className="category">{bag.BagCategory}</div>
                  <div className="price">{`THB ${bag.BagPrice}`}</div>
                </div>
              </Link>
            ))}
          </section>
        </div>
      );
}

export default Recommend;
 
