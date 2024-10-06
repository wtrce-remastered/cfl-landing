import styled from "styled-components"

export const Wrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    max-height: 27.5rem;
    max-width: max-content;
`

export const Conductive = styled.div`
    position: absolute;
    transform: translate(-50%, 0);
    top: 0.8125rem;
    left: 50%;

    max-height: calc(100% - 1.625rem);
    height: 100%;
    width: 0.125rem;

    background: ${props => props.theme.colors.lavender};

    z-index: -1;
`

export const ConductiveCompleted = styled(Conductive)`
    transition: 0.3s;
    background: ${props => props.theme.colors.blue};

    height: 0;
`

interface ChainWrapperProps {
    $completed?: boolean
    $active?: boolean
}

export const ChainWrapper = styled.div<ChainWrapperProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1.4375rem;
    height: 1.4375rem;

    background: ${({ $completed, $active, theme }) => ($completed || $active ? theme.colors.blue : theme.colors.lightBlue)};

    border-radius: 100%;
    border: 0.125rem solid ${({ $completed, theme }) => ($completed ? theme.colors.blue : theme.colors.lightBlue)};

    & > svg {
        width: 0.75rem;
    }
`

export const ChainCore = styled.div`
    width: 0.5rem;
    height: 0.5rem;

    background: #fff;

    border-radius: 100%;
`

