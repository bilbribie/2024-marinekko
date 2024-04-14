import { useState, useEffect } from 'react'
import Nav1 from './components/nav1';
import Header from './components/header';
import Footer from './components/footer';
import Recommend from './components/recommend';
import { Link } from 'react-router-dom';
import './style/home.css';

function Home() {

    let catagoriesArray = [{ name: "Tote Bag", img: "/assets/tote.jpg" },
    { name: "Shoulder Bag", img: "/assets/shoulder.jpg" },
    { name: "Back pack", img: "/assets/backpack.jpg" },
    { name: "Handbag", img: "/assets/hand.jpg" },
    { name: "Wallet", img: "/assets/wallet.jpg" }];

    const [recommendedArray, setRecommendedArray] = useState([]);

    useEffect(() => {
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
                          // Now we have both bagDetails and imageUrl, we combine them here
                          return { ...bagDetails, imageUrl }; // Ensure your bag details uses the same keys as expected in Recommend component
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
    }, []);

    return (
        <div>
            <Header />
            <Nav1 />
            <div class="page-container-home"> {/* page-container*/}

                <section class="newCollectionBackground">
                    <div class="center">
                        <div class="t">
                            NEW Collection 2024
                        </div>


                        <div class="link-container">
                            <Link to="/search" class="NoDecorate">
                                SHOP NOW
                            </Link>
                        </div>

                    </div>
                </section>

                <div class="horizontal-seperator"></div>

                <section class="container1">
                    <div class="Title">
                        Catagories
                    </div>

                    <section class="container1_1">
                        <div class="seeButton">
                            See more
                        </div>

                        <Link>
                            <img class="nextSymbol" src="/assets/next.png" alt="Next" />
                        </Link>

                    </section>

                </section>

                <section class="catagories-container">

                    {catagoriesArray.map((catagory) => {
                        return (
                            <div class="catagory-container">
                                <img src={catagory.img} class="catagory-picture-container"></img>
                                <div class="catagory-name-container">
                                    {catagory.name}
                                </div>
                            </div>
                        )
                    })}

                </section>

                <div class="horizontal-seperator"></div>

                <section class="recommended-header-container">
                    For you
                </section>

                <Recommend bagsArray={recommendedArray} />

            </div> {/* page-container*/}
            <Footer />
        </div>
    )
}

export default Home;