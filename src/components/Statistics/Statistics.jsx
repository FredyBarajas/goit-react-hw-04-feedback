import React from 'react';
import {
  StatsList,
  StatsBar,
  StatsSection,
  StatsResult,
  StatsLabel,
  StatsData,
} from './StyledStatistics';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  const maxWidth = Math.max(good, neutral, bad);

  return (
    <div>
      <StatsSection>
        <StatsList>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </StatsList>

        <StatsList>
          <li>
            <StatsBar
              style={{
                width: `${(good * 180) / maxWidth}px`,
                backgroundColor: 'green',
              }}
            ></StatsBar>
          </li>
          <li>
            <StatsBar
              style={{
                width: `${(neutral * 180) / maxWidth}px`,
                backgroundColor: 'yellow',
              }}
            ></StatsBar>
          </li>
          <li>
            <StatsBar
              style={{
                width: `${(bad * 180) / maxWidth}px`,
                backgroundColor: 'red',
              }}
            ></StatsBar>
          </li>
        </StatsList>
      </StatsSection>
      <StatsSection>
        <StatsResult>
          <StatsData>{total}</StatsData>
          <StatsLabel>Total</StatsLabel>
        </StatsResult>
        <StatsResult>
          <StatsData>{positiveFeedback}%</StatsData>
          <StatsLabel>Positive</StatsLabel>
        </StatsResult>
      </StatsSection>
    </div>
  );
};

export default Statistics;
