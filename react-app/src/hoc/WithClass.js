import React from 'react';


//one way of hoc//
const withClass=props=>(

<div className={props.classes}> {props.children}

</div>
);



//another way of hoc//

// const withClass=(WrappedComponent,className)=>{

//     return props=>(
//     <div className={className}>

//         <WrappedComponent/>
    
//     </div>
//     );
// };

export  default withClass;