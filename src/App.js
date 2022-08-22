import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { increase, decrease } from './countSlicer';
import { useDispatch, useSelector } from 'react-redux';

const ChangeValueBtn = styled.button`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
  border-radius: 50%;
  font-size: 2rem;
  border: none;
  background-color: #61dafb;
  color: whitesmoke;
  &:active {
    transform: scale(0.9);
  }
`;

const ButtonWrapper = styled.div``;

function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>count : {count}</p>
        <ButtonWrapper>
          <ChangeValueBtn onClick={() => dispatch(increase())}>
            +
          </ChangeValueBtn>
          <ChangeValueBtn onClick={() => dispatch(decrease())}>
            -
          </ChangeValueBtn>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
