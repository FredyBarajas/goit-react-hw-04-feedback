import React, { Component } from 'react';
import {
  StatsList,
  StatsBar,
  StatsSection,
  StatsResult,
  StatsLabel,
  StatsData,
} from './StyledStatistics';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.props;

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
                width={`${(good * 180) / Math.max(good, neutral, bad)}px`}
                bgcolor="green"
              ></StatsBar>
            </li>
            <li>
              <StatsBar
                width={`${(neutral * 180) / Math.max(good, neutral, bad)}px`}
                bgcolor="yellow"
              ></StatsBar>
            </li>
            <li>
              <StatsBar
                width={`${(bad * 180) / Math.max(good, neutral, bad)}px`}
                bgcolor="red"
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
  }
}

export default Statistics;
