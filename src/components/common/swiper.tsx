import React from 'react';

interface TagProps extends React.HTMLProps<HTMLDivElement> {
    index: any
}

interface TabsComponents {
    Tab: React.FC<React.HTMLProps<HTMLDivElement>>;
}

const Tab:React.FC<React.HTMLProps<HTMLDivElement>> = () => {
    return (<></>)
}

const BWPSwiper:React.FC<React.HTMLProps<HTMLDivElement>> & TabsComponents = (props) => {
    return (<>
        
    </>);
}

BWPSwiper.Tab = Tab;

export default BWPSwiper;