import { logoGroupSrc } from "widgets/page-navigation/header/model"

import { LogoGroup, Wrapper } from "./styled"

export const Mobile = () => (
    <Wrapper>
        <LogoGroup>
            <img src={logoGroupSrc} />
        </LogoGroup>
    </Wrapper>
)

