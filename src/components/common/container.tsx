import React from 'react';

interface HeadProps extends React.HTMLProps<HTMLDivElement> {
    background?: any
}

const Head:React.FC<HeadProps> = ({
    background = null,
    children = null
}) => {
    return (<div className="w-full relative">
    { background !== null && <div className="aspect-w-16 aspect-h-9 bg-no-repeat bg-center bg-cover " style={{backgroundImage: `url(${background})`}} /> }
    {children}
</div>)
}

const Body:React.FC<React.HTMLProps<HTMLDivElement>> = ({
    children = null,
    className = ""
}) => {
    return (<div className={`relative px-3 py-2 w-full ${className}`}>{children}</div>)
}

const Foot:React.FC<React.HTMLProps<HTMLDivElement>> = ({
    children = null,
    className = ""
}) => {
    return (<div className={`px-3 pt-2 pb-1 flex h-12 w-full border-bwp-light-grey border-t border-solid relative ${className}`}>{children}</div>)
}

interface MenuSubComponents {
    Head: React.FC<HeadProps>;
    Body: React.FC<React.HTMLProps<HTMLDivElement>>;
    Foot: React.FC<React.HTMLProps<HTMLDivElement>>;
}

const BWPContainer:React.FC<React.HTMLProps<HTMLDivElement>> & MenuSubComponents = (props) => {
    const { className = "" } = props;
    return(<div className={`flex flex-col overflow-hidden ${className}`}>
        {props.children}
    </div>)
}

BWPContainer.Head= Head;
BWPContainer.Body= Body;
BWPContainer.Foot= Foot;


export default BWPContainer;