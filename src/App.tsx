import { RefObject, useRef, useState } from 'react';
import stakingCircularProgressLinecapSeparatorIcon from './circular-progress-linecap.svg';
import './App.css';
import SVG from 'react-inlinesvg';

function App() {
  const [progress] = useState(0.6);
  const progressLineCapIndicatorRef = useRef<SVGAElement | null>(null);

  const updateProgressRef = (
    ref: RefObject<SVGAElement>,
    circumference: number
  ) => {
    if (!ref.current) return;

    const dashoffset = circumference * (1 - progress);

    ref.current.style.strokeDashoffset = String(dashoffset);
  };

  return (
    <SVG
      onLoad={() => {
        if (!progressLineCapIndicatorRef.current) return;

        const RADIUS = 88;
        const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

        progressLineCapIndicatorRef.current.style.strokeDasharray = String(
          CIRCUMFERENCE + 2
        );

        updateProgressRef(progressLineCapIndicatorRef, CIRCUMFERENCE);
      }}
      innerRef={progressLineCapIndicatorRef}
      src={stakingCircularProgressLinecapSeparatorIcon}
    />
  );
}

export default App;
