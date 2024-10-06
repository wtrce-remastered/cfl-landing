import { useCallback, useRef } from "react"
import { useTheme } from "styled-components"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"

import { ArrowButtons, CenterContainer, Typography } from "shared/ui-kit"

import { Partners } from "../../model"
import { LabelBox, PartnershipDescription, SliderContent, Wrapper } from "../styled"

import { PartnerElement } from "./partner-element"

import "swiper/css"

export const Desktop = () => {
    const theme = useTheme()

    const swiper = useRef<SwiperClass>()

    const handleNext = useCallback(() => swiper.current?.slideNext(), [])
    const handlePrev = useCallback(() => swiper.current?.slidePrev(), [])

    return (
        <CenterContainer>
            <Wrapper>
                <LabelBox>
                    <PartnershipDescription>
                        <Typography $fontSize={theme.fsizes.small} $color={theme.colors.blue}>
                            Trust
                        </Typography>
                        <Typography $fontSize={theme.fsizes.xlarge} $color={theme.colors.darkBlue} $fontWeight={400}>
                            Partners
                        </Typography>
                        <Typography $fontSize={theme.fsizes.regular} $color={theme.colors.granite} $fontWeight={400}>
                            We team up with industry leaders to bring you fast, reliable, and sustainable logistics solutions, enhancing every step of your supply chain
                        </Typography>
                    </PartnershipDescription>

                    <ArrowButtons onNext={handleNext} onPrev={handlePrev} hasNext hasPrev />
                </LabelBox>

                <SliderContent>
                    <Swiper slidesPerView="auto" onSwiper={root => (swiper.current = root)} spaceBetween={30} loop={true}>
                        {Partners.map((partner, index) => (
                            <SwiperSlide key={`${partner.name?.toString()}-${index}`}>
                                <PartnerElement {...partner} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SliderContent>
            </Wrapper>
        </CenterContainer>
    )
}

