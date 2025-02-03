import { Box } from '@mui/material';
import Counter from '../components/Counter';
import UserForm from '../components/UserForm';
import RichTextEditorComponent from '../components/RichTextEditor';
import GoogleAuth from '../components/GoogleAuth';

const Home = () => (
    <Box sx={{ padding: 3 }}>
        <GoogleAuth />
        <Counter />
        <UserForm />
        <RichTextEditorComponent />
    </Box>
);

export default Home;
