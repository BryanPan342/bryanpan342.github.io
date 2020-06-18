import anime from 'animejs';
import {enable_scroll, disable_scroll} from './utility';

/*************************** 
*      NAV ANIMATIONS      *
****************************/

export function animate_nav(isNav: boolean){
    const tgt = '.nav';
    if(isNav){
        anime({
            targets: tgt,
            translateX: '100%',
            duration: 500,
            easing: 'easeOutQuad'
        });
        enable_scroll();
    }else{
        anime({
            targets: tgt,
            translateX: '0%',
            duration: 500,
            easing: 'easeOutQuad'
        });
        disable_scroll();
    }
}

/*************************** 
*  EDGY-YELLOW ANIMATIONS  *
****************************/
const ball_offsets:number[][] = [[0, 165], [330, 165], 
                                [165, 330], [165, 0], 
                                [48.33, 281.67], [281.67, 48.33], 
                                [281.67, 281.67], [48.33, 48.33],
                                [12.56, 228.14], [317.44, 101.86],
                                [101.86, 317.44], [228.14, 12.56],
                                [228.14, 317.44], [101.86, 12.56],
                                [317.44, 228.14], [12.56, 101.86]];

const ball_reset:number[] = [1, 9, 5, 11, 3, 13, 7, 15, 2, 10, 6, 12, 4, 14, 8, 16];

export function shoot_balls(n:number){
    let tgt:string = '.balls_' + n.toString();
    let tp:string = ball_offsets[n-1][0].toString() + 'px';
    let lft:string = ball_offsets[n-1][1].toString() + 'px';
    anime({
        targets: tgt,
        top: tp,
        left: lft,
        easing: 'easeOutQuad',
        duration: 1000,
    });
}

export function expand_center(iter:number){
    let tgt:string = '.sun-center';
    let s:string = (30 + iter*30) + 'px';
    anime({
        targets: tgt,
        width: s,
        height: s,
        easing: 'easeOutQuad',
        duration: 1000,
    });
}

export function close_loader(theme:string){
    const body = document.body;
    if(theme == 'edgy-yellow'){
        let s_tgt:string = '.sun-center';
        let i:number = 0, d:number = 0, iter:number;
        for (i = 0; i < 16; i++){
            iter = ball_reset[i];
            let b_tgt:string = '.balls_' + iter;
            let x:number = 165 - ball_offsets[iter-1][1];
            let y:number = 165 - ball_offsets[iter-1][0];
            anime({
                targets: b_tgt,
                translateX: x,
                translateY: y,
                opacity: [
                    {value: 0, duration: 300, delay: 200, easing: 'easeInQuad'}
                ],
                easing: 'easeOutQuad',
                duration: 200,
            });
        }
        anime({
            targets: s_tgt,
            scale: [
                {value: .25, duration:300, easing: 'easeOutQuad'},
                {value: .4, duration:300, easing: 'easeInQuad'},
                {value: .15, duration:300, easing: 'easeOutQuad'},
                {value: 50, duration:600, easing:'easeInQuad'}
            ],
            duration: 1000,
        });
        
    }
    setTimeout(()=>{
        body.classList.add('loaded');
        enable_scroll();
    }, 1200);
}