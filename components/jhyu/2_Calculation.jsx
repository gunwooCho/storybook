import React from 'react';

class CalculationApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: '',
    };
  }

  handleInputChange = (event, inputName) => {
    const inputValue = event.target.value;
    const sanitizedValue = inputValue.replace(/[^0-9-]/g, ''); // 숫자와 마이너스 기호 외의 문자 제거
    const parsedValue = sanitizedValue.startsWith('-') ? `-${sanitizedValue.replace(/-/g, '')}` : sanitizedValue; // 마이너스 기호가 처음에 오도록 처리
    this.setState({ [inputName]: parsedValue });
  };

  handleCalculate = () => {
    const { num1, num2 } = this.state;

    // 입력된 값이 정수인지 확인
    const parsedNum1 = parseInt(num1, 10);
    const parsedNum2 = parseInt(num2, 10);

    if (Number.isNaN(parsedNum1) || Number.isNaN(parsedNum2)) {
      this.setState({ result: '두 입력값 모두 정수여야 합니다.' });
      return;
    }

    // 사칙연산 결과 생성 및 문자열로 변환
    const sum = (parsedNum1 + parsedNum2).toString();
    const difference = (parsedNum1 - parsedNum2).toString();
    const product = (parsedNum1 * parsedNum2).toString();
    const quotient = (parsedNum1 / parsedNum2).toString();

    const results = `
      ${parsedNum1} + ${parsedNum2} = ${sum}\n
      ${parsedNum1} - ${parsedNum2} = ${difference}\n
      ${parsedNum1} * ${parsedNum2} = ${product}\n
      ${parsedNum1} / ${parsedNum2} = ${quotient}
    `;

    this.setState({ result: results });
  };

  render() {
    const { num1, num2, result } = this.state;

    return (
      <div>
        <input
          type="text"
          value={num1}
          onChange={event => this.handleInputChange(event, 'num1')}
        />
        <input
          type="text"
          value={num2}
          onChange={event => this.handleInputChange(event, 'num2')}
        />
        <button
          type="button"
          onClick={this.handleCalculate}
        >
          계산하기
        </button>
        <pre>{result}</pre>
      </div>
    );
  }
}

export default CalculationApp;
