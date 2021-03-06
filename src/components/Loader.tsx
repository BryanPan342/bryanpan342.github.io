import React, {useEffect} from 'react';

import {LoaderProps} from '../utils/props';
import {shoot_balls, expand_center, close_loader} from '../utils/animation';
import {random, disable_scroll} from '../utils/utility';
import {useWindowSize} from '../utils/hooks';

function Loader(props: LoaderProps){
    const theme = props.theme;
    let m: number = 1;
    if (/Mobi|Android/i.test(navigator.userAgent) && window.matchMedia( "(max-width: 480px)").matches){
        m = 2/3;
    }

    useEffect(()=>{
        disable_scroll('loader');
        if (theme == 'edgy-yellow'){
            var iter:number, t_offset:number = 0;
            for (iter = 0; iter < 8; iter++){
                let t0:number = iter;
                let t1:number = iter*2 + 1;
                let t2:number = iter*2 + 2;
                setTimeout(() =>{
                    shoot_balls(t1, m);
                    shoot_balls(t2, m);
                    expand_center(t0, m);
                }, 500 + t_offset);
    
                t_offset += (random(1,20) * 25);
            }
        }
    
        setTimeout(()=>{
            close_loader(theme, m);
        }, 1500 + t_offset);
    }, []);

    return (
        <div className='loader-wrapper'>
            {theme == 'edgy-yellow' ? 
                <div className='loader fullscreen'>
                    <div className="sun">
                        <span className='balls_1'/>
                        <span className='balls_2'/>
                        <span className='balls_3'/>
                        <span className='balls_4'/>
                        <span className='balls_5'/>
                        <span className='balls_6'/>
                        <span className='balls_7'/>
                        <span className='balls_8'/>
                        <span className='balls_9'/>
                        <span className='balls_10'/>
                        <span className='balls_11'/>
                        <span className='balls_12'/>
                        <span className='balls_13'/>
                        <span className='balls_14'/>
                        <span className='balls_15'/>
                        <span className='balls_16'/>
                    </div>
                    <div className='sun-center'/>
                </div>
            :
            <div className='loader'/>
            }
        </div>
    );
}

export default Loader;