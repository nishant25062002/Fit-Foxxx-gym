import React from 'react'
import { data } from '../../data'
import styled from 'styled-components'

function Instructor() {
    const data = [
        {
            img: "https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltJTIwaW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        { img: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bSUyMGluc3RydWN0b3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", },
        { img: "https://images.unsplash.com/photo-1598267416824-5907946a3810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltJTIwaW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", },
        { img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGd5bSUyMGluc3RydWN0b3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", },
        { img: "https://images.unsplash.com/photo-1578971102567-916960872844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltJTIwaW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", }
    ]
    return (
        <Container>
            {
                data.map((data) => (
                    <div>
                        <img src={data?.img} alt="img" />
                        <h4>Ram Ratan Kumar</h4>
                        <h5>Fitness Instructor</h5>
                    </div>
                ))
            }
        </Container>
    )
}

export default Instructor

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 12px ;
    justify-content: center;
    align-items: center;
    img{
        margin: 12px ;
        height: 300px;
        width: 240px;
    }
    h4{
        margin: 0 0 0 0;
        font-size: 18px;
        color: #3d3d3d;
    }
    h5{
        margin: 0 0 0 0;
        font-size: 14px;
        color: #5e5d5d;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    }
`