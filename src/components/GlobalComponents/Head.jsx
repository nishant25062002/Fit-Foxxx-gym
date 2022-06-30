import React from 'react';
import styled from 'styled-components';

function HeadLine({ name, desc }) {
    return (
        <Section>
            <div>
                <p></p>
                <span>{name}</span>
                <p></p>
            </div>
            <h6>
                {desc}
            </h6>
        </Section>
    )
}

export default HeadLine

const Section = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin:24px 0;
div{
   display: flex;
   align-items: baseline;
justify-content: center;
}
p{
    margin: 0;
    height: 7px;
    width: 80px;
    border-radius: 12px;
    background-color:orange;
}
   span{
    margin:12px !important;
    font-size: 33px;
    font-weight: 600;
   }
   h6{
    /* margin-bottom: 22px; */
    font-size: 16px;
    font-weight: 600;
    color: gray;
   }
   @media screen and (max-width: 760px){
    margin:14px 0;
    span{
    margin:7px !important;
    font-size: 23px;
   }
   p{
    width:50px;
    height: 5px;
   }
   h6{
    margin: 0 22px;
    font-size: 12px;
    text-align:center;
    font-weight: 600;
    color: gray;
   }
   }
`;