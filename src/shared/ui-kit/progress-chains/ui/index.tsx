import React, { useMemo } from "react"

import { Icon } from "shared/ui-kit"
import { ChainCore, ChainWrapper, Conductive, ConductiveCompleted, Wrapper } from "shared/ui-kit/progress-chains/ui/styled.tsx"

interface ProgressChainsProps {
    steps: number
    completed: number
}

export const ProgressChains: React.FC<ProgressChainsProps> = ({ steps, completed }) => {
    const chains = useMemo(() => {
        const result = []
        for (let step = 1; step <= steps; step++) result.push(step)

        return result
    }, [steps])

    const competedPercent = useMemo(() => (125 / steps) * completed, [completed, steps])

    return (
        <Wrapper>
            <Conductive />
            <ConductiveCompleted style={{ height: `${competedPercent}%` }} />

            {chains.map(chain => {
                const isCompleted = chain <= completed

                return (
                    <ChainWrapper $completed={isCompleted} $active={chain === completed + 1} key={chain}>
                        {isCompleted ? <Icon.CheckMark color="#fff" /> : <ChainCore />}
                    </ChainWrapper>
                )
            })}
        </Wrapper>
    )
}
