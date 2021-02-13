import React, {useState, useEffect} from "react";
import {useFetchTimeInfo} from "./hooks/useFetchTimeInfo";
import {GlobalStyle} from "./styles/GlobalStyles";

import {AppContainer, Slider} from "./styles/AppStyles";

import {MainTimeInfo} from "./layout/MainTimeInfo";
import {TimeStats} from "./layout/TimeStats";

export const App = () => {
    const [showMore, setShowMore] = useState(false)

    const handleShowMore = () => {
        setShowMore(!showMore)
    }
    const timeData = useFetchTimeInfo()

    if(timeData.loading) {
        return null
    }

    return (
        <AppContainer daytime={timeData.dayTime}>
            <Slider showMore={showMore}>
                <GlobalStyle/>
                    <MainTimeInfo
                        handleShowMore={handleShowMore}
                        showmore={showMore}
                        time={timeData.info.datetime}
                        abbreviation={timeData.info.abbreviation}
                        daytime={timeData.dayTime}
                    />
                    <TimeStats
                        daytime={timeData.dayTime}
                        timezone={timeData.info.timezone}
                        day_of_week={timeData.info.day_of_week}
                        day_of_year={timeData.info.day_of_year}
                        week_number={timeData.info.week_number}
                    />
            </Slider>
        </AppContainer>
    )
}

