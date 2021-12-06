import React, {useState} from 'react';

const App = () => {

    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [total, setTotal] = useState('');


    const changeTotal1 = (e) => {
        setQuantity(e.target.value);
        setTotal(e.target.value * price );
    }

    const changeTotal2 = (e) => {
        setPrice(e.target.value);
        setTotal(e.target.value * quantity );
    }

    return (
        <div>
            <input type="number" placeholder='Quantity' value={quantity} onChange={changeTotal1}/>

            <input type='number' placeholder='Price' value={price} onChange={changeTotal2}/>

            <input type='number' placeholder='Total' value={total} />
        </div>
    );
}

export default App;

