import React, { useState, useEffect } from "react"

interface TagProps extends React.HTMLProps<HTMLDivElement> {
    color?: string
}

interface TagsProps extends React.HTMLProps<HTMLDivElement> {
    index: number
}

interface TabsComponents {
    Tab: React.FC<React.HTMLProps<HTMLDivElement>>;
}

const Tab:React.FC<TagProps> = (props) => {
    const { className = "", color = "light-green", children, ...rest} = props;
    return (<div className={`${className} text-bwp-${color}`} {...rest}>
        {children}
    </div>);
}

const BWPSwitchTabs:React.FC<TagsProps> & TabsComponents = (props) => {
    const { index = 0, className="", children, ...rest} = props
    const [current, setCurrent] = useState(index);
    
    useEffect(()=>{
        if (index !== current) {
            setCurrent(index);
        }
    },[index])

    return (<div
        className={`${className} rounded-14 relative`}
        {...rest}
    > 
    <span 
        className="bg-bwp-light-green absolute top-0 h-full rounded-14 transform transition-all"
        style={{
            width: `${100/React.Children.count(children)}%`,
            willChange: "transform",
            left: `${(current*(100/React.Children.count(children)))}%`
        }}
    >

    </span>
    <ul className="flex w-full">
    {
        children && React.Children.map(props.children,(child, i) => {
            return (<li className={`bwp-switch-tabs w-auto px-2 py-2 sm:text-xl text-sm sm:leading-8 leading-6 text-center cursor-pointer ${i === index ? "text-bwp-white actived":""}`}
                style={{
                    zIndex: 1,
                    width: `${100/React.Children.count(children)}%`
                }}
            >{ child }</li>);
        })
    }
    </ul>
    </div>)
}
BWPSwitchTabs.Tab = Tab;
export default BWPSwitchTabs;
