import styled from 'styled-components';

export const StatsList = styled.ul`
  list-style: none;
  margin-right: 20px;
  font-size: 18px;
  gap: 10px;
`;

export const StatsBar = styled.div`
  background-color: ${({ bgcolor }) => bgcolor};
  width: ${({ width }) => width};
  height: 20px;
  border: 3px solid #fff;
  max-width: 250px;
`;

export const StatsSection = styled.section`
  display: flex;
  width: 360px;
  box-shadow: 5px 5px 5px #000137;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  justify-content: space-between;
  background-color: #fff;
  color: #000173;
`;

export const StatsResult = styled.div`
  width: 150px;
  border-radius: 10px;
  background-color: #252850;
  color: aliceblue;
  text-align: center;
  padding: 10px;
`;

export const StatsData = styled.p`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const StatsLabel = styled.p`
  font-size: 18px;
`;
