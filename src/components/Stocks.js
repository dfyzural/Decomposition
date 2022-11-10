// Биржевые курсы

import "./stocks.css";

export default function Stocks({ stocks }) {
  return (
    <article className="stocks">
      {stocks.map((item) => (
        <div className="stocks_item" key={item.title}>
          <a className="stocks_link" href={item.link}>
            {item.title}
          </a>
          <span className="stocks_value">{item.value.toFixed(2)}</span>
          <span className="stocks_change">{item.change}</span>
        </div>
      ))}
    </article>
  );
}
