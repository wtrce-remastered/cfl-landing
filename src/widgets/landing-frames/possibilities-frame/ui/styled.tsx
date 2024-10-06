import styled from "styled-components"

import { FlexBox } from "shared/ui-kit"

export const PosibilitySelectWrapper = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2.5rem;

    & > svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`

export const MobileWrapper = styled.div`
    display: grid;
    gap: 1.5625rem;
`

export const LabelWrapper = styled.div`
    display: grid;
    gap: 0.9375rem;
`

export const LabelLogoGroup = styled(FlexBox).attrs({
    $gap: ".5rem"
})`
    height: 0.9375rem;
`

export const SliderContent = styled.div`
    .swiper-pagination {
        top: 0;
        bottom: unset;
    }
`

