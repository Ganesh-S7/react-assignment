import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../context/store';
import { animated, useSpring } from 'react-spring';
import { Button, Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile screens

    // Background animation
    const background = useSpring({
        backgroundColor: `rgba(0, 0, 255, ${Math.min(count / 20, 1)})`,
        config: { tension: 280, friction: 60 },
    });

    return (
        <animated.div style={background}>
            <Box
                sx={{
                    padding: 2,
                    textAlign: 'center',
                    minHeight: '385px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                
            >
                {/* Counter Title */}
                <Typography variant={isMobile ? 'h6' : 'h4'} gutterBottom>
                    Counter
                </Typography>

                {/* Counter Value */}
                <Typography variant={isMobile ? 'h5' : 'h3'} gutterBottom>
                    {count}
                </Typography>

                {/* Buttons */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                        marginTop: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => dispatch(decrement())}
                        sx={{ width: isMobile ? '70px' : 'auto' }} // Full width on mobile
                    >
                        -
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => dispatch(reset())}
                        sx={{ width: isMobile ? '70px' : 'auto' }} // Full width on mobile
                    >
                        Reset
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => dispatch(increment())}
                        sx={{ width: isMobile ? '70px' : 'auto' }} // Full width on mobile
                    >
                        +
                    </Button>
                </Box>
            </Box>
        </animated.div>
    );
};

export default Counter;