import { produce } from "immer"
import { useEffect, useRef, useState } from "react"

import { CenterContainer } from "shared/ui-kit"

import { Logos } from "widgets/landing-frames/companies-frame/model"
import { Carousel, Wrapper } from "widgets/landing-frames/companies-frame/ui/styled"

export const CompaniesFrame = () => {
    const [displayLogos, setDisplayLogos] = useState<string[]>([...Logos, ...Logos, ...Logos])

    const displayOrder = useRef<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayLogos(
                produce(prev => {
                    prev.push(Logos[displayOrder.current])
                    prev.shift()

                    if (displayOrder.current === Logos.length - 1 && displayOrder.current !== 0) {
                        displayOrder.current = 0
                    } else displayOrder.current += 1
                })
            )
        }, 30000)

        return () => clearInterval(interval)
    }, [])

    return (
        <CenterContainer $width="100%" $mobilePadding="0">
            <Wrapper>
                <Carousel>
                    {displayLogos.map((logo, index) => (
                        <img src={`/assets/images/partner-logos/${logo}.png`} alt={`${logo}-logo`} key={`${logo}-${index}`} />
                    ))}
                </Carousel>
            </Wrapper>
        </CenterContainer>
    )
}

