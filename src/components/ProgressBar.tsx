import React from "react";

type Props = {
   maxValue: number;
   currentValue: number;
};
const ProgressBar = (props: Props) => {
   const { maxValue, currentValue } = props;
   const width: number = (currentValue / maxValue) * 100;

   return (
      <div
         className="progress "
         style={{
            height: "2.5rem",
            width: "100%",
            background: "rgba(0,0,0,0.1)",
         }}
      >
         <div
            title="progress bar"
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow={currentValue}
            aria-valuemin={0}
            aria-valuemax={maxValue}
            style={{
               width: `${width}%`,
               fontWeight: "150",
               fontSize: "1rem",
            }}
         >
            {currentValue} / {maxValue}
         </div>
      </div>
   );
};

export default ProgressBar;
