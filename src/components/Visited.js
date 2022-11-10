// Виджет Посещаемое

export default function Visited({ visited }) {
  return visited.map((item) => (
    <div className="visited" key={item.title}>
      <a href={item.link} className="visited_link">
        <span className="visited_title">{item.title}</span>
      </a>
      <span className="visited_description">- {item.description}</span>
    </div>
  ));
}
