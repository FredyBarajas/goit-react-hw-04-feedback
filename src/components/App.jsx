import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Button from './Button/Button';
import { AppDiv, AppList } from 'StyledApp';
import Title from './Title/Title';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total === 0 ? 0 : ((good / total) * 100).toFixed(2);
  };

  const handleIncrement = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <AppDiv>
      <Title title="Please Leave Feedback">
        <AppList>
          <li>
            <Button option="good" onClick={() => handleIncrement('good')} />
          </li>
          <li>
            <Button
              option="neutral"
              onClick={() => handleIncrement('neutral')}
            />
          </li>
          <li>
            <Button option="bad" onClick={() => handleIncrement('bad')} />
          </li>
        </AppList>
      </Title>
      {total === 0 ? (
        <p>"There is no feedback"</p>
      ) : (
        <Title title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        </Title>
      )}
    </AppDiv>
  );
};

export default App;
