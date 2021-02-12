import React, {useState} from "react";
import {GlobalStyle} from "./styles/GlobalStyles";

import {AppContainer, Slider} from "./styles/AppStyles";

import {MainTimeInfo} from "./layout/MainTimeInfo";
import {TimeStats} from "./layout/TimeStats";

export const App = () => {
    const [showMore, setShowMore] = useState(false)

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    return (
        <AppContainer>
            <Slider showMore={showMore}>
                <GlobalStyle/>
                <MainTimeInfo
                    handleShowMore={handleShowMore}
                    showMore={showMore}/>
                <TimeStats/>
            </Slider>
        </AppContainer>
    )
}

