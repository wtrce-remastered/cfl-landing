import { useTheme } from "styled-components"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { CenterContainer, Typography, TypographyInsert } from "shared/ui-kit"

import { Partners } from "../../model"
import { PartnerElement } from "../desktop/partner-element"
import { LabelBox, PartnershipDescription, SliderContent, Wrapper } from "../styled"

import "swiper/css"
import "swiper/css/pagination"

export const Mobile = () => {
    const theme = useTheme()

    return (
        <CenterContainer>
            <Wrapper>
                <LabelBox>
                    <PartnershipDescription>
                        <Typography $fontSize="2.5rem" $color={theme.colors.blue} $gap=".625rem">
                            Trust -
                            <TypographyInsert $color={theme.colors.darkBlue} $fontWeight={500}>
                                Partners
                            </TypographyInsert>
                        </Typography>
                        <Typography $fontSize={theme.fsizes.regular} $color={theme.colors.granite} $fontWeight={300}>
                            We team up with industry leaders to bring you fast, reliable, and sustainable logistics solutions, enhancing every step of your supply chain
                        </Typography>
                    </PartnershipDescription>
                </LabelBox>

                <SliderContent>
                    <Swiper slidesPerView="auto" modules={[Pagination]} pagination loop>
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

