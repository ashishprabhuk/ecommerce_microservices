import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #0092ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Flash Sale ! Free Delivery on Orders Over Rs.500/- </Container>;
};

export default Announcement;
