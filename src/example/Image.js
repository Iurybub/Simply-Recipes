import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Image = () => {
    return (
        <Wrapper>
            <article>
                <h4>Constrained</h4>
                <StaticImage
                    src="../assets/images/recipe-1.jpeg"
                    alt="food"
                    placeholder="tracedSVG"
                    layout="constrained"
                    className='example-img'
                    as="section"
                ></StaticImage>
            </article>
            <article>
                <h4>Fixed</h4>
                <StaticImage
                    src="../assets/images/recipe-1.jpeg"
                    alt="food"
                    placeholder="tracedSVG"
                    layout="fixed"
                    width={200}
                    className='example-img'
                    as="section"
                ></StaticImage>
            </article>
            <article>
                <h4>Default</h4>
                <StaticImage
                    src="../assets/images/recipe-1.jpeg"
                    alt="food"
                    placeholder="dominantColor"
                    layout="constrained"
                    className='example-img'
                    as="article"
                ></StaticImage>
            </article>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    width: 70vw;
    display: flex;
    text-align: center;
    flex-direction: column;
    margin: 0 auto;
    article{
        border: 1px solid red;
    }
    .example-img{
        border-radius: 3px;
    }
    @media (min-width: 992px){
        display: flex;
        flex-direction: row;
    }
`;
export default Image
