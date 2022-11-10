// Компонент Новости. Выводит вкладки навигации по новостям и список новостей

import "./news.css";

export default function News({ tabs, news }) {
    return (
        <article className="news">
            <div className="news_tabs">
                {tabs.map((item) => (
                    <a className="news_tab" href={item.link} key={item.title}>
                        {item.title}
                    </a>
                ))}
            </div>
            <div>
                <ul className="news_list">
                    {news.map((o) => (
                        <li className="list_item" key={o.title}>
                            <img src={o.img} className="item_img" alt="..." />
                            <a className="item_link" href={o.link}>
                                {o.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
