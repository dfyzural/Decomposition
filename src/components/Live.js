// Виджет Эфир

export default function Live({ live }) {
  return live.map((item) => (
    <div className="live" key={item.title}>
      <a href={item.link} className="live_link">
        <span className="live_title">{item.title}</span>
      </a>
      <span className="live_description">{item.description}</span>
    </div>
  ));
}
