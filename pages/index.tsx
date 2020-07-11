import styled from 'styled-components';

const IndexPage = () => {
  return (
    <Container>
      <div>
        <h1>Hi, I'm Alek Tobias</h1>
        <p>bla blabla</p>
      </div>
      <div>teste12</div>
    </Container>
  );
};
export const Container = styled.div`
  margin: 64px 48px 32px;
  color: red;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export default IndexPage;
