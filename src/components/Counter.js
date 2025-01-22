import {useEffect, useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue);
    };

    useEffect(() => {
        document.title = `Giá trị ${count}`;
    })

    return (
        <div>
            Giá trị {count}
            <div>
                <button onClick={handleClick}>Tăng</button>
            </div>
        </div>
    );

}

export default Counter;