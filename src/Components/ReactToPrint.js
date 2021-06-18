
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import ComponentToPrint from './../Views/SurveyResults';

const Example = (props) => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} props={props}/>
    </div>
  );
};

export default Example;

