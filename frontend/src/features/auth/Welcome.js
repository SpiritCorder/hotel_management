import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectAuthUser} from '../../app/auth/authSlice';
import moment from 'moment';

import '../../styles/welcome.css';

const Welcome = () => {

    const {username} = useSelector(selectAuthUser);

    const [timestamp, setTimestamp] = useState(moment().format('LTS'));

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimestamp(moment().format('LTS'));
        }, 1000)

        return () => clearInterval(timerId);
    }, []);

    return (
        <div>
            <div className="dashboard-welcome-box">
                <h1>Welcome, <span>{username}</span></h1>
                <h6>{moment().format('MMMM Do YYYY')} , {moment().format('dddd')}</h6>
                <p className='welcome-box-current-time'>{timestamp}</p>
                <div className='welcome-box-img'>
                    <img src='/img/welcome.png' alt='welcome' />
                </div>
            </div>

            
        </div>
    );
}

export default Welcome;