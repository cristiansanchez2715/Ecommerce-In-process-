import { useRef } from "react";
import { Cards, useWindowVisible } from './Cards';

function SelectComponent({data}) {
    let cardContainerRef = useRef(null);
  
    return (
      <div ref={cardContainerRef}>
        <Cards data={data} cardContainerRef={cardContainerRef}  />
      </div>
    );
  }

  export {   SelectComponent }