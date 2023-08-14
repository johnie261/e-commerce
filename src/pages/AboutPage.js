import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title="About"/>
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="aboutImage"/>
      <article>
        <div className="title">
          <h2>Our story</h2>
          <div className="underline"></div>
        </div>
        <p>
        Welcome to shopFinity, where shopping meets extraordinary. Discover a curated selection of exceptional products sourced from trusted vendors worldwide. 
        With a seamless and user-friendly interface, navigate through diverse categories, uncover hidden gems, and enjoy outstanding customer support. 
        Join us on this exciting journey as we unmask the perfect deals, empower your shopping adventures, and bring a touch of magic to every purchase.   
        Experience ecommerce like never before with shopFinity. Shop confidently, discover remarkable products, and embrace the extraordinary.
        </p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
