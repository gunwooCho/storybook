import React from 'react';

class Calculation extends React.Component {
  constructor(props) {
    super(props);
    this.num1 = React.createRef();
    this.num2 = React.createRef();
    this.result = React.createRef();
  }

  calculate = () => {
    const num1 = Number(this.num1.current.value);
    const num2 = Number(this.num2.current.value);

    const results = `
      ${num1} + ${num2} = ${num1 + num2}\n
      ${num1} * ${num2} = ${num1 * num2}\n
      ${num1} - ${num2} = ${num1 - num2}\n
      ${num1} / ${num2} = ${num1 / num2}
    `;
    this.result.current.textContent = results;
  };

  render() {
    return (
      <div>
        <input type="number" ref={this.num1} />
        <input type="number" ref={this.num2} />
        <button type="button" onClick={this.calculate}>클릭</button>
        <pre ref={this.result} />
      </div>
    );
  }
}

export default Calculation;
