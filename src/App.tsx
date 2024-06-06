import { useEffect, useState } from "react"
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 200px;
`;

const Button = styled.button `
  padding: 10px 20px;
  cursor: pointer;
`;

const Result = styled.h2 `
  margin-top: 20px;
`;

export default () => {

  const [gasolina, setGasolina] = useState('');
  const [etanol, setEtanol] = useState('');
  const [calculo, setCalculo] = useState('');
  const [resposta, setResposta] = useState('');

  const handleCalcular = () => {
    setCalculo( etanol / gasolina );
    
  };

  useEffect(() => {
    if (calculo <= 0.7){
      setResposta('etanol');
    } else{
      setResposta('gasolina');
    }
  },[calculo])

  return (
    <Container>
      
      <Input type="number" 
      onChange={t => setEtanol(t.target.value)}
      placeholder="Informe o valor do Etanol"
      />


      <Input type="number" 
      onChange={t => setGasolina(t.target.value)} 
      placeholder="Informe o valor da Gasolina"
      />

      <Button onClick={handleCalcular}>Clique Aqui </Button>
      <Result>valor obtido {calculo}%</Result>
      <Result>Abasteça com {resposta} </Result>
    </Container>
  )

}