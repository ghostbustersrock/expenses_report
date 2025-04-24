import React, { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0)

    return (
        <div className="card">
            <button onClick={() => setCount(count + 1)}>
                Count is {count}
            </button>
        </div>
    )
}

export default Counter