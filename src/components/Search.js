// Вывод поисковой строки

import "./search.css";

export default function Search(props) {
    return (
        <article className="search">
            <div className="search_bar">
                <img
                    className="search_ico"
                    src="http://placekitten.com/120/60"
                    alt="ico"
                />
                <input
                    className="search_input"
                    type="text"
                />
                <button className="search_button" type="submit">
                    Найти
                </button>
            </div>
            {props.children}
        </article>
    );
}