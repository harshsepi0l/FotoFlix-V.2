import React from 'react';
import styled from "styled-components";
import AntCarousel from './AntCarousel';

import { Carousel } from "./Carousel";
import CustomCarousel from '../../components/Common/AboutUsPage/CustomCarousel';
import SlideOne from './SlideOne';

const AboutUsPage: React.FC = () => {
    return (
        <div>
            {/* <Carousel>
                <SlideOne />
                <SlideOne />
                <SlideOne />
            </Carousel>
            <CustomCarousel /> */}
            <CustomCarousel />
        </div>
    );
}

export default AboutUsPage;