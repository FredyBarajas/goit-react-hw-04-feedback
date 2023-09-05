import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Button from './Button/Button';
import { AppDiv, AppList } from 'StyledApp';
import Title from './Title/Title';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : ((good / total) * 100).toFixed(2);
  };

  handleIncrement = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <AppDiv>
        <Title title="Please Leave Feedback">
          <AppList>
            <li>
              <Button
                option="good"
                onClick={() => this.handleIncrement('good')}
              />
            </li>
            <li>
              <Button
                option="neutral"
                onClick={() => this.handleIncrement('neutral')}
              />
            </li>
            <li>
              <Button
                option="bad"
                onClick={() => this.handleIncrement('bad')}
              />
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
  }
}

export default App;
