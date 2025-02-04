import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../context/store';
import { animated, useSpring } from 'react-spring';
import { Button, Box, Typography } from '@mui/material';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const background = useSpring({
        backgroundColor: `rgba(0, 0, 255, ${Math.min(count / 20, 1)})`,
        config: { tension: 280, friction: 60 },
    });

    return (
        <animated.div style={background} sx={{borderRadius:3}}>
            <Box sx={{ padding: 2, textAlign: 'center', minHeight:'385px', alignContent:"center" }}>
                <Typography variant="h4" gutterBottom>
                    Counter
                </Typography>
                <Typography variant="h6">{count}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
                    <Button variant="contained" color="primary" onClick={() => dispatch(decrement())}>-</Button>
                    <Button variant="contained" color="secondary" onClick={() => dispatch(reset())}>Reset</Button>
                    <Button variant="contained" color="primary" onClick={() => dispatch(increment())}>+</Button>
                </Box>
            </Box>
        </animated.div>
    );
};

export default Counter;
