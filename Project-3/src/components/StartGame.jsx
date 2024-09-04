import styled from "styled-components";


const StartGame = () => {
  return (
    <Container>
        
        <div>
        <img src="/images/dices.png" alt="" />
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Button>Play Now</Button>

        </div>
    </Container>
  )
}

export default StartGame;
const Container = styled.div`
max-width:1180px;
display: flex;
align-items: center;
height: 100vh;
margin: 0 auto;

.content h1{
font-size:96px;
white-space: nowrap;
}
`;
const Button = styled.button`

padding: 10px 18px;
background: #000000;
border-radius: 5px;
color: white;
min-width:220px;
border:none;
font-size:16px;
border: 1px solid transparent;
transition: 0.2s background ease-in;
cursor: pointer;
&:hover{
    background-color:white;
    border: 1px solid black;
    color: black;
    transition: 0.2s background ease-in;

}
`;