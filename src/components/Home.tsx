import React, { useState, useEffect } from 'react';
import {useWindowSize} from '../utils/hooks';
import {hide_hello, show_hello} from '../utils/animation';
import Social from './Social';

function Home() {
    const size:{width: number, height: number} = useWindowSize();
    const [offset, setOffset] = useState(0);

    var hello_parallax_condition = -1 * size.height;

    const handleScroll = () => {
        const showingHello = document.body.classList.contains('showHello');
        const parallax = document.body.classList.contains('parallax');
        const about = document.getElementById("about_home");
        const about_bounding = about.getBoundingClientRect();
        const hello = document.getElementById('hello');
        
        if(showingHello){
            hide_hello();
        }
        else if(offset <= 0 && about_bounding.top == 0 && !showingHello){
            document.body.classList.add('parallax');
            show_hello();
        }else if (!showingHello){
            if(about_bounding.top > (hello_parallax_condition)){
                hello.style.position = 'fixed';
                if (parallax){
                    document.body.classList.remove('parallax');
                    hello.style.top = "";
                }
            }else if(about_bounding.top > (hello_parallax_condition * 3)){
                hello.style.position = 'absolute';
                if (!parallax){
                    document.body.classList.add('parallax');
                    hello.style.top = (-1 * hello_parallax_condition) + "px";
                } 
            }
        }
        setOffset(about_bounding.top);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const hello_width = (103 / 1065 * size.width) + 203.7;
    const hello_height = (60 / 1065 * size.height) + 118.9;
    return (
        <main id='home'>
            <div className='wrapper'>
                <div id='hello'>
                    <svg width={hello_width} height={hello_height} viewBox="0 0 343 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g className='lines'>
                            <path className='words' stroke-alignment='inner' stroke='#191919' strokeWidth='1' d="M5.36211 65.7C7.76211 65.7 9.42878 65.5667 10.3621 65.3C11.3621 64.9667 11.9621 64.4667 12.1621 63.8C12.4288 63.0667 12.5621 61.8333 12.5621 60.1V12.1C12.5621 10.3 12.4288 9.03333 12.1621 8.29999C11.8954 7.56666 11.2621 7.06666 10.2621 6.8C9.32878 6.46666 7.69544 6.3 5.36211 6.3V3H34.9621V6.3C32.6288 6.3 30.9621 6.46666 29.9621 6.8C28.9621 7.06666 28.3288 7.56666 28.0621 8.29999C27.8621 9.03333 27.7621 10.3 27.7621 12.1V32.5H53.9621V12.1C53.9621 10.3 53.8288 9.03333 53.5621 8.29999C53.2954 7.56666 52.6621 7.06666 51.6621 6.8C50.7288 6.46666 49.0954 6.3 46.7621 6.3V3H76.3621V6.3C74.0288 6.3 72.3621 6.46666 71.3621 6.8C70.3621 7.06666 69.7288 7.56666 69.4621 8.29999C69.2621 9.03333 69.1621 10.3 69.1621 12.1V60.1C69.1621 61.8333 69.2954 63.0667 69.5621 63.8C69.8954 64.5333 70.5288 65.0333 71.4621 65.3C72.4621 65.5667 74.0954 65.7 76.3621 65.7V69H46.7621V65.7C49.1621 65.7 50.8288 65.5667 51.7621 65.3C52.7621 64.9667 53.3621 64.4667 53.5621 63.8C53.8288 63.0667 53.9621 61.8333 53.9621 60.1V36.5H27.7621V60.1C27.7621 61.8333 27.8954 63.0667 28.1621 63.8C28.4288 64.5333 29.0288 65.0333 29.9621 65.3C30.9621 65.5667 32.6288 65.7 34.9621 65.7V69H5.36211V65.7ZM83.8777 65.7C86.2111 65.7 87.8444 65.5667 88.7777 65.3C89.7777 65.0333 90.4111 64.5333 90.6777 63.8C91.0111 63.0667 91.1777 61.8333 91.1777 60.1V12.1C91.1777 10.3 91.0111 9.03333 90.6777 8.29999C90.3444 7.5 89.6777 6.96666 88.6777 6.7C87.7444 6.43333 86.1444 6.3 83.8777 6.3V3H113.578V6.3C111.311 6.3 109.678 6.43333 108.678 6.7C107.744 6.96666 107.111 7.5 106.778 8.29999C106.511 9.03333 106.378 10.3 106.378 12.1V60.1C106.378 61.9 106.511 63.1667 106.778 63.9C107.111 64.6333 107.744 65.1333 108.678 65.4C109.678 65.6 111.311 65.7 113.578 65.7V69H83.8777V65.7ZM125.585 77.8C127.185 77.5333 128.751 76.9 130.285 75.9C131.885 74.9 132.685 73.6667 132.685 72.2C132.685 71.4667 132.518 70.9667 132.185 70.7C131.851 70.4333 131.251 70.1667 130.385 69.9C126.118 68.7 123.985 66.2 123.985 62.4C123.985 60.2 124.651 58.3667 125.985 56.9C127.385 55.3667 129.251 54.6 131.585 54.6C133.785 54.6 135.651 55.3667 137.185 56.9C138.718 58.4333 139.485 60.9 139.485 64.3C139.485 68.5667 138.285 72.2333 135.885 75.3C133.485 78.4333 130.185 80.3 125.985 80.9L125.585 77.8ZM171.182 65.7C173.516 65.7 175.149 65.5667 176.082 65.3C177.082 65.0333 177.716 64.5333 177.982 63.8C178.316 63.0667 178.482 61.8333 178.482 60.1V12.1C178.482 10.3 178.316 9.03333 177.982 8.29999C177.649 7.5 176.982 6.96666 175.982 6.7C175.049 6.43333 173.449 6.3 171.182 6.3V3H200.882V6.3C198.616 6.3 196.982 6.43333 195.982 6.7C195.049 6.96666 194.416 7.5 194.082 8.29999C193.816 9.03333 193.682 10.3 193.682 12.1V60.1C193.682 61.9 193.816 63.1667 194.082 63.9C194.416 64.6333 195.049 65.1333 195.982 65.4C196.982 65.6 198.616 65.7 200.882 65.7V69H171.182V65.7ZM213.989 23.6C215.656 23.3333 217.256 22.7 218.789 21.7C220.323 20.7 221.089 19.4667 221.089 18C221.089 17.2667 220.889 16.7667 220.489 16.5C220.156 16.2333 219.589 15.9667 218.789 15.7C214.523 14.5 212.389 12 212.389 8.2C212.389 6 213.056 4.16666 214.389 2.7C215.789 1.16666 217.656 0.399995 219.989 0.399995C222.189 0.399995 224.056 1.19999 225.589 2.79999C227.123 4.33333 227.889 6.8 227.889 10.2C227.889 14.4 226.689 18.0667 224.289 21.2C221.889 24.2667 218.589 26.1 214.389 26.7L213.989 23.6ZM238.249 65.7H240.249C242.515 65.7 243.949 65.3667 244.549 64.7C245.215 63.9667 245.549 62.5333 245.549 60.4V12C245.549 10.2667 245.382 9.03333 245.049 8.29999C244.782 7.56666 244.149 7.06666 243.149 6.8C242.149 6.53333 240.482 6.36666 238.149 6.3V3H261.249L278.749 48H278.949L296.249 3H318.349V6.3C316.082 6.36666 314.449 6.53333 313.449 6.8C312.515 7.06666 311.882 7.56666 311.549 8.29999C311.282 9.03333 311.149 10.2667 311.149 12V60.1C311.149 61.7667 311.282 63 311.549 63.8C311.882 64.5333 312.549 65.0333 313.549 65.3C314.549 65.5667 316.149 65.7 318.349 65.7V69H289.249V65.7C291.449 65.7 293.015 65.5667 293.949 65.3C294.882 64.9667 295.482 64.4333 295.749 63.7C296.015 62.9667 296.149 61.7667 296.149 60.1V13.8H295.949L275.649 67.6H270.649L249.949 14.4H249.749V60.4C249.749 61.9333 249.882 63.0667 250.149 63.8C250.415 64.5333 250.915 65.0333 251.649 65.3C252.382 65.5667 253.582 65.7 255.249 65.7H258.249V69H238.249V65.7ZM0.332813 194.7C2.53281 194.7 4.13281 194.567 5.13281 194.3C6.13281 193.967 6.79948 193.433 7.13281 192.7C7.46615 191.9 7.63281 190.7 7.63281 189.1V141.1C7.63281 139.3 7.46615 138.033 7.13281 137.3C6.79948 136.5 6.13281 135.967 5.13281 135.7C4.19948 135.433 2.59948 135.3 0.332813 135.3V132H31.4328C47.6328 132 55.7328 137.067 55.7328 147.2C55.7328 151.2 54.4661 154.467 51.9328 157C49.4661 159.533 45.8328 161.3 41.0328 162.3V162.4C52.6995 164.4 58.5328 170.367 58.5328 180.3C58.5328 192.1 49.8661 198 32.5328 198H0.332813V194.7ZM27.8328 160.9C32.0995 160.9 35.3328 159.8 37.5328 157.6C39.7995 155.4 40.9328 152.233 40.9328 148.1C40.9328 139.9 36.5995 135.8 27.9328 135.8C25.7328 135.8 24.3328 136.067 23.7328 136.6C23.1328 137.067 22.8328 138.133 22.8328 139.8V160.9H27.8328ZM29.8328 194.2C38.3661 194.2 42.6328 189.6 42.6328 180.4C42.6328 175.467 41.3661 171.633 38.8328 168.9C36.2995 166.167 32.6995 164.8 28.0328 164.8H22.8328V187.7C22.8328 190.167 23.3328 191.867 24.3328 192.8C25.3328 193.733 27.1661 194.2 29.8328 194.2ZM65.3719 194.7C67.7052 194.7 69.3385 194.567 70.2719 194.3C71.2719 194.033 71.9052 193.533 72.1719 192.8C72.5052 192.067 72.6719 190.833 72.6719 189.1V141C72.6719 139.267 72.5052 138.033 72.1719 137.3C71.8385 136.5 71.1719 135.967 70.1719 135.7C69.2385 135.433 67.6385 135.3 65.3719 135.3V132H96.1719C112.372 132 120.472 137.4 120.472 148.2C120.472 152.933 118.972 156.7 115.972 159.5C112.972 162.233 109.005 164 104.072 164.8V165C108.205 165.8 111.139 167.333 112.872 169.6C114.672 171.8 116.005 175.233 116.872 179.9L117.772 184.1C118.572 187.9 119.572 190.633 120.772 192.3C122.039 193.9 124.072 194.7 126.872 194.7V198H108.472C107.539 197.267 106.672 196.067 105.872 194.4C105.072 192.733 104.439 190.867 103.972 188.8L100.972 175C100.439 172.467 99.5052 170.567 98.1719 169.3C96.9052 168.033 95.0385 167.4 92.5719 167.4H87.8719V189.1C87.8719 190.767 88.0052 192 88.2719 192.8C88.6052 193.533 89.2385 194.033 90.1719 194.3C91.1719 194.567 92.7385 194.7 94.8719 194.7V198H65.3719V194.7ZM91.9719 163.4C96.5052 163.4 99.8385 162.3 101.972 160.1C104.105 157.833 105.172 154.3 105.172 149.5C105.172 144.833 104.139 141.4 102.072 139.2C100.072 136.933 96.8719 135.8 92.4719 135.8C90.6052 135.8 89.3719 136.067 88.7719 136.6C88.1719 137.067 87.8719 138.033 87.8719 139.5V163.4H91.9719ZM185.356 132V135.3C182.89 135.3 181.056 135.733 179.856 136.6C178.723 137.467 177.523 139.167 176.256 141.7L161.156 171.5V189C161.156 190.733 161.323 192 161.656 192.8C162.056 193.533 162.79 194.033 163.856 194.3C164.923 194.567 166.69 194.7 169.156 194.7V198H138.456V194.7C140.923 194.7 142.656 194.567 143.656 194.3C144.723 194.033 145.39 193.533 145.656 192.8C145.99 192 146.156 190.733 146.156 189V172.6L130.056 140.3C129.056 138.3 128.056 136.967 127.056 136.3C126.056 135.633 124.29 135.3 121.756 135.3V132H152.956V135.3H148.656C146.99 135.3 146.156 135.967 146.156 137.3C146.156 138.167 146.423 139.167 146.956 140.3L159.256 166.3H159.456L171.156 141.2C171.69 139.933 171.956 138.933 171.956 138.2C171.956 137.267 171.656 136.567 171.056 136.1C170.456 135.567 169.69 135.3 168.756 135.3H165.056V132H185.356ZM239.683 189.7C240.283 191.233 240.816 192.333 241.283 193C241.816 193.667 242.516 194.133 243.383 194.4C244.249 194.6 245.616 194.7 247.483 194.7V198H217.483V194.7H222.183C223.983 194.7 224.883 193.933 224.883 192.4C224.883 191.8 224.783 191.167 224.583 190.5L218.883 174.6H198.283L192.583 190.8C192.383 191.467 192.283 192.067 192.283 192.6C192.283 193.333 192.483 193.867 192.883 194.2C193.349 194.533 194.116 194.7 195.183 194.7H199.383V198H178.583V194.7C181.316 194.7 183.249 194.367 184.383 193.7C185.516 192.967 186.516 191.467 187.383 189.2L209.383 132H218.883L239.683 189.7ZM217.583 170.9L208.683 146.2H208.383L199.583 170.9H217.583ZM263.781 144.3H263.581V189.5C263.581 191.367 263.948 192.7 264.681 193.5C265.415 194.3 266.715 194.7 268.581 194.7H272.081V198H252.081V194.7H254.681C256.281 194.7 257.448 194.3 258.181 193.5C258.981 192.633 259.381 191.3 259.381 189.5V141C259.381 139.267 259.215 138.033 258.881 137.3C258.615 136.567 257.981 136.067 256.981 135.8C255.981 135.533 254.315 135.367 251.981 135.3V132H273.881L304.881 179.9H305.181V140.1C305.181 136.9 303.481 135.3 300.081 135.3H296.581V132H316.381V135.3H313.981C310.915 135.3 309.381 136.9 309.381 140.1V198.7H299.381L263.781 144.3Z" fill="none"/>
                            <path className='dot' stroke-alignment='inner' stroke='#FEC600' strokeWidth='1' d="M334.48 198.9C332.413 198.9 330.613 198.167 329.08 196.7C327.613 195.167 326.88 193.367 326.88 191.3C326.88 189.233 327.613 187.433 329.08 185.9C330.613 184.367 332.413 183.6 334.48 183.6C336.613 183.6 338.413 184.367 339.88 185.9C341.413 187.367 342.18 189.167 342.18 191.3C342.18 193.433 341.413 195.233 339.88 196.7C338.413 198.167 336.613 198.9 334.48 198.9Z" fill="none"/>
                        </g>
                    </svg>
                </div>
                <div id='hello-block'></div>
                <div className='body fullscreen' id='about_home'>
                    <div id='about_wrapper'>
                        <img></img>
                        <div id='blurb' className='tbody'>I’m a software developer. I enjoy making things just because. I study computer science at UCLA. I love coffee.</div>
                        <Social/>
                    </div>
                </div>
            </div>
            <div className='body halfscreen' id='personal'>
                <h1> Personal Stuff </h1>
            </div>
            <div className='body fullscreen'>
                <h1> Work </h1>
            </div>
            <div className='body halfscreen' id='skills'>
                <h1> Skills </h1>
            </div>
            <div className='body fullscreen'>
                <h1> Projects </h1>
            </div>
        </main>
    );
}

export default Home;