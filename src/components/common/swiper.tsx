import React, { useState, useEffect, useRef, createRef, TouchEvent } from 'react';

interface TagsProps extends React.HTMLProps<HTMLDivElement> {
    index: number,
    dynamicHeight?: boolean,
    allowSwipe?: boolean,
    afterSwipe?: (index:number) => void
}

interface TabsComponents {
    Tab: React.FC<React.HTMLProps<HTMLDivElement>>;
}

const Tab:React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const { className = "", children, ...rest} = props;
    return (<div className={`w-full ${className}`} {...rest}>
        {children}
    </div>);
}

const BWPSwiper:React.FC<TagsProps> & TabsComponents = (props) => {
    const { index = 0, afterSwipe = (i:number)=>void(0), className="",children, dynamicHeight = true, allowSwipe = false,  ...rest } = props;
    const [current, setCurrent] = useState(index);
    const [height, setHeight] = useState(100);
    const [width, setWidth] = useState(100);
    const ref = useRef<HTMLDivElement>(null);
    const refs = useRef<Array<any>>(Array.from({length: React.Children.count(children)}, a => createRef()));

    useEffect(()=> {
        if (ref && ref.current) {
            setWidth((ref.current as any).offsetWidth);
            console.log((ref.current as any).offsetWidth)
        }
    },[window.innerWidth])
    useEffect(()=>{
        if (index !== current) {
            setCurrent(index);
        }
    },[index])

    useEffect(()=>{
        // change height here
        if (dynamicHeight) {
            if (refs.current[current]) {
                const childNodes = refs.current[current].current?.childNodes;
                if (childNodes && childNodes[0] !== undefined) { 
                    setHeight((childNodes[0] as any).clientHeight);
                }
            }
        }
    },[current])

    // Swipe Control
    const [onSwipe, setOnSwipe] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0)
    const [prevX, setPrevX] = useState<number>(0)
    const [delta, setDelta] = useState<number>(0)
    const [velocity, setVelocity] = useState<number>(0)
    const [swipeTime, setSwipeTime] = useState<number>(0);
    
    const handleOnSwipe = (clientX:number) => {
        if (allowSwipe) {
            setPrevX(clientX);
            setStartX(clientX);
            setOnSwipe(true);
            setSwipeTime(Date.now());
            setVelocity(0);
        }
    }

    const handleOnMove = (clientX:number) => {
        if (onSwipe) {
            // const v = clientX - startX;
            // const v = (clientX - startX) / (Date.now() - swipeTime)
            const v = 20 * (clientX - prevX) / (Date.now() - swipeTime)
            const deltaX = clientX - startX;
            // console.log(`ClientX: ${clientX}, StartX: ${startX}, Velocity: ${v}, DeltaX: ${deltaX}`)
            
            setVelocity(v);
            setDelta(deltaX)
            setPrevX(clientX);
            setSwipeTime(Date.now());

            if (Math.abs(deltaX) >= (width/2)) {
                // Trigger Change Tab
                const maxCount = React.Children.count(children);
                if (deltaX > 0 && current > 0) {
                    afterSwipe(current-1);
                    setCurrent(current-1);
                }
                if (deltaX < 0 && current < (maxCount-1)) {
                    afterSwipe(current+1);
                    setCurrent(current+1);
                }
                handleOnEnd();
            }
        }
    }

    const handleOnEnd = () => {
        setStartX(0);
        setVelocity(0);
        setDelta(0);
        if (onSwipe) {
            setOnSwipe(false);
        }
    }

    const handleOnTouchStart = (e:TouchEvent) => {
        handleOnSwipe(e.targetTouches[0].clientX);
    }

    const handleOnTouchMove = (e:TouchEvent) => {
        handleOnMove(e.targetTouches[0].clientX);
    }

    const handleOnTouchEnd = (e:any) => {
        handleOnEnd();
    }

    const handleOnMouseDown = (e:any) => {
        handleOnSwipe(e.clientX)
    }

    const handleOnMouseMove = (e:any) => {
        handleOnMove(e.clientX)
    }

    const handleOnMouseUp = (e:any) => {
        handleOnEnd();
    }
    const handleOnMouseLeave = (e:any) => {
        handleOnEnd();
    }

    return (<div className={`overflow-hidden bg-bwp-white ${className}`} {...rest}>
        <div className="flex flex-row flex-nowrap w-full transform transition-transform	" 
            ref={ref}
            style={{
                willChange: "transform",
                height: `${height}px`,
                transform: `translateX(${(current*100*-1)}%) translateX(${velocity}px)`
            }}
            onTouchStart={handleOnTouchStart}
            onTouchMove={handleOnTouchMove}
            onTouchEnd={handleOnTouchEnd}
            onMouseDown={handleOnMouseDown}
            onMouseMove={handleOnMouseMove}
            onMouseUp={handleOnMouseUp}
            onMouseLeave={handleOnMouseLeave}
        >
            {
                children && React.Children.map(props.children,(child, i) => {
                    return (<div className={`flex-shrink-0 w-full overflow-auto`} 
                        ref={refs.current[i]}>{ child }</div>);
                })
            }
        </div>
    </div>);
}

BWPSwiper.Tab = Tab;

export default BWPSwiper;