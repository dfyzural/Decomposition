// Список сервисов (Видео, Картинки, Новости и тп)

import "./services.css";

export default function Services({ services }) {
  return (
    <article className="services">
      {services.map((item) => (
        <div className="services_item" key={item.title}>
          <a className="services_link" href={item.link}>
            {item.title}
          </a>
        </div>
      ))}
    </article>
  );
}
