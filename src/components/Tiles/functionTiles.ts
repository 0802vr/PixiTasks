/* eslint-disable @typescript-eslint/no-explicit-any */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function shuffleAndSample<T>(array: T[], sampleSize: number): T[] {
    // Shuffle utilities to help random selection
    const shuffleArray = (arr: T[]): T[] => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };
    
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    // Shuffle each half
    const shuffledLeft = shuffleArray([...left]);
    const shuffledRight = shuffleArray([...right]);

    // Sample elements from both halves
    const sampledLeft = shuffledLeft.slice(0, Math.min(sampleSize, shuffledLeft.length));
    const sampledRight = shuffledRight.slice(0, Math.min(sampleSize, shuffledRight.length));

    // Merge the sampled elements in a visually appealing fashion
    const combinedSample = [];
    const maxLength = Math.max(sampledLeft.length, sampledRight.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < sampledLeft.length) {
            combinedSample.push(sampledLeft[i]);
        }
        if (i < sampledRight.length) {
            combinedSample.push(sampledRight[i]);
        }
    }

    return combinedSample;
}

export function handleScrollEvent(track:any, progress:number) {
    track.pixels.forEach((pixel:any, index:number) => {
        gsap.to(pixel, {
            opacity: progress,
            duration: 0.2,
            delay: index * 0.01,
        });
    });
}

export function createScrollTrigger(track:any) {
    const trigger = `.${track.className}`;
     
    ScrollTrigger.create({
            trigger: trigger,
            start: track.start,
            end: track.end,
            onUpdate: ({ progress }) => handleScrollEvent(track, progress),
            scrub: true,
            
        /*  markers:true, */
            
        });
    
}

