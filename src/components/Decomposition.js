import React from "react";
import News from "./News.js";
import Stocks from "./Stocks.js";
import Services from "./Services.js";
import Search from "./Search.js";
import Banner from "./Banner.js";
import Widget from "./Widget.js";
import Visited from "./Visited.js";
import Tv from "./Tv.js";
import Live from "./Live.js";
import { tabs, news, stocks, services, banner, weather, visited, tvList , liveList} from "./data.js";

export default function Decomposition() {
    return (
        <div className="main">
            <News tabs={tabs} news={news} />
            <Stocks stocks={stocks} />
            <Services services={services} />
            <Search>
                <span className="search_text">
                    Найдётся всё. Например, <a href="#">фазы луны сегодня</a>
                </span>
            </Search>
            <Banner img={banner.img} link={banner.link} />

            <action className="widgets">
                <Widget title="Погода" link="#">
                    <div className="weather">
                        <img src={weather.icon} className="weather_icon" alt="..." />
                        <div className="weather_temp">{weather.temp}°</div>
                        <div className="weather_forecast">
                            <span>Утром {weather.temp_morning}°, </span>
                            <span>днём {weather.temp_day}°</span>
                        </div>
                    </div>
                </Widget>

                <Widget title="Посещаемое" link="#">
                    <Visited visited={visited} />
                </Widget>

                <Widget title="Карта Германии" link="#">
                    <div>Расписания</div>
                </Widget>

                <Widget title="Телепрограмма" link="#">
                    <Tv tvList={tvList} />
                </Widget>

                <Widget title="Эфир" link="#">
                    <Live live={liveList} />
                </Widget>
            </ action>
        </div>
    );
}