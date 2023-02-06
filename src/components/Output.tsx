import { CaretCircleLeft } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ResumeContent from './ResumeContent';

function Output() {
  return (
    <Container>
      <Link to="/">
        <CaretCircleLeft
          size={38}
          style={{ color: "black" }}
          // onClick={clearStorageForEdu}
        />
      </Link>
    </Container>
  );
}

export default Output;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 62px;
`
