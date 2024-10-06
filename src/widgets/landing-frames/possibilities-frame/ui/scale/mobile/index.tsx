import { useTheme } from "styled-components"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { CenterContainer, Icon, Typography } from "shared/ui-kit"

import { Possibilities } from "widgets/landing-frames/possibilities-frame/model"

import { LabelLogoGroup, LabelWrapper, MobileWrapper, SliderContent } from "../../styled"

import { PossibilityItem } from "./possibility-item"

import "swiper/css"
import "swiper/css/pagination"

export const Mobile = () => {
    const theme = useTheme()

    return (
        <CenterContainer>
            <MobileWrapper>
                <LabelWrapper>
                    <LabelLogoGroup>
                        <Icon.Logo color={theme.colors.granite} width="1.0625rem" height=".9375rem" />

                        <Typography $fontSize={theme.fsizes.tiny} $color={theme.colors.granite}>
                            CargoFantasyLimited
                        </Typography>
                    </LabelLogoGroup>

                    <Typography $fontSize={theme.fsizes.small} $color={theme.colors.granite}>
                        Helps companies deliver cargo to French by providing data to select the best freight offers and shipment tracking.
                    </Typography>
                </LabelWrapper>

                <SliderContent>
                    <Swiper slidesPerView="auto" modules={[Pagination]} spaceBetween={15} pagination loop>
                        {Possibilities.map(([key, value]) => (
                            <SwiperSlide key={key}>
                                <PossibilityItem label={value.label} content={value.content} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SliderContent>
            </MobileWrapper>
        </CenterContainer>
    )
}

