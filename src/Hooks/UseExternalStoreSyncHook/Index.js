import React, { useSyncExternalStore } from 'react'

const Index = () => {
    function subscribe(callback){
        window.addEventListener('resize',callback);
        return ()=>window.removeEventListener('resize',callback);
    }
    function getSnapshot()
    {
        return window.innerWidth;
    }
        function getSnapshots()
    {
        return window.innerHeight;
    }
    const screenWidth=useSyncExternalStore(subscribe,getSnapshot);
    const screenHeight=useSyncExternalStore(subscribe,getSnapshots);
 
  return (
    <div>
     <h1>Screen Width{screenWidth}</h1>
      <h1>Screen Height{screenHeight}</h1>
     
    </div>
  )
}

export default Index
