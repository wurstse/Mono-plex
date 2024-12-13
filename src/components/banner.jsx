import { useState } from "react"

export const BannerComponent = (a)=> {
    const [count,setCount] = useState(1);
console.log(count)
    return(
        <>
<p>{count}</p>
<button onClick={()=>setCount(count+1)}>+1</button>
        </>
    )
}