import { keyframes } from 'styled-components';

export const transitionTiming = '0.25s ease-in';

export const rotate = keyframes`
 from {
   transform: rotate(0deg);
 }

 to {
   transform: rotate(360deg);
 }
`;
