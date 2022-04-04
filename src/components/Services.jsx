import React from "react";
import styled from "styled-components";
import Services1 from "../assets/Services1.png";
import Services2 from "../assets/Services2.png";
import Services3 from "../assets/Services3.png";
import { TitleStyles } from "./ReusableStyles";
export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="yellow">What we do?</h1>
        <p><i>
         We freshly roast and ground our coffee everyday to provide our customers high quality of taste in every sip
       </i> </p>
      </div>
      <div className="services">
        <div className="service">
          <img src={Services2} alt="" />
          <p>
            We cater for parties and ceremonies and do ask for vegetarian and vegan options for our cakes, coffee and sandwiches which will be freshly made as per our client's selection, we also deliver via Zomato and Swiggy within 5kms radius. For large catering orders we also deliver within 30 kms radius
          </p>
          
        </div>
        <div className="service yellow">
          <img src={Services1} alt="" />
          <p>
            We cater the best quality of food locally produced from organic farms everyday, our cakes are made from cage free eggs and unbleached flour, do ask for gluten free option if you have certain allergies, also our food is labeled with allergen present in it and the best before consumable date 
          </p>
        </div>
        <div className="service">
          <img src={Services3} alt="" />
          <p>
          We use high quality of Arabica Coffee beans imported from Ethiopia, which are then freshly roasted and ground daily on top of that we have a large selection of milk to choose from like Soy, Oats and almond milk for vegans and our regular milk comes from ethically sourced milk from Sahiwal Cows

          </p>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        gap: 10em;
      }
      
      }
    }
    
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
