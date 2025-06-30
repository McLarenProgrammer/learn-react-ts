import React from "react";

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string
    height?: string
    variant: CardVariant
    onClick: () => void
    children?: React.ReactNode
}

function Card({width, height, variant, onClick, children}: CardProps) {
    return (
        <>
            <div
                style={{
                    width,
                    height,
                    border: variant === CardVariant.outlined ? '1px solid blue' : 'none',
                    background: variant === CardVariant.primary ? 'lightblue' : ''
                }}
                onClick={onClick}
            >
                {children}
            </div>
        </>
    )
}

export default Card;