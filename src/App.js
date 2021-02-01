import Card from './components/Card'
import styled from 'styled-components'

const AppContainer = styled.div`
  height:100vh;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content: center;
`

function App() {
  return (
    <AppContainer>
      <Card></Card>
    </AppContainer>
      
  );
}

export default App;
