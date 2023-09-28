import '../App.css';

const Calculator = () => (
  <section>
    <div className="Container">
      <input type="text" value="0" className="output grid-element" />
      <button type="button" className="grid-element">Ac</button>
      <button type="button" className="grid-element">+/-</button>
      <button type="button" className="grid-element">%</button>
      <button type="button" className="grid-element">÷</button>
      <button type="button" className="grid-element">7</button>
      <button type="button" className="grid-element">8</button>
      <button type="button" className="grid-element">9</button>
      <button type="button" className="grid-element">*</button>
      <button type="button" className="grid-element">4</button>
      <button type="button" className="grid-element">5</button>
      <button type="button" className="grid-element">6</button>
      <button type="button" className="grid-element">-</button>
      <button type="button" className="grid-element">1</button>
      <button type="button" className="grid-element">2</button>
      <button type="button" className="grid-element">3</button>
      <button type="button" className="grid-element">+</button>
      <button type="button" className="grid-element zero-button">0</button>
      <button type="button" className="grid-element">.</button>
      <button type="button" className="grid-element equal-sign">=</button>

    </div>
  </section>
);
export default Calculator;
