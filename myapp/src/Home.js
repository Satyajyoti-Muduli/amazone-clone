import React from 'react';
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                <div className="home__row">
                    <Product id="12321341" title="The Lean Startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>
                    <Product id="49538094" title="Kenwood kmix stand mixer For Baking , Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5litre Glass Bowl" price={239.0} rating={4} image=""/>
                    

                </div>
                <div className="home__row">
                    <Product id="4903850" title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor" price={199.99} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
                    <Product id="23445930" title="Amazon Echo 3rd Generation Smart Speaker with Alexa" price={98.99} rating={5} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>
                    <Product id="3254354345" title="new apple iPad Pro-Silver (4th  genearation)" price={598.9} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>

                </div>
                <div className="home__row">
                    <Product id="90829332" title=" Samsung LC49RG90SSUNXEN 49 Curved LED Gaming Monitor -Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.0} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Home
