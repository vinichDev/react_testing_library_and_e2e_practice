import { useEffect, useState } from 'react';

const SimpleExamples = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState('');

    const onClick = () => setToggle(prev => !prev);

    useEffect(() => {
        setTimeout(() => {
            setData({});
        }, 100);
    }, []);


    return (
        <div>
            <h1 data-testid={'value-elem'}>{value}</h1>
            {toggle && <div data-testid={'toggle-elem'}>toggle</div>}
            {data &&
                <div style={{color: 'red'}}>
                    data
                </div>
            }
            <div>
                Hello world!
            </div>
            <button
                data-testid={'toggle-btn'} onClick={onClick}
            >
                click me
            </button>
            <input
                value={value}
                type="text"
                onChange={e => setValue(e.target.value)}
                placeholder={'input value...'}
            />
        </div>
    );
};

export default SimpleExamples;