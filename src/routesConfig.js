
import TodoApp from './pages/todoapp/TodoApp';
import PasswordStrength from './pages/passwordstrength/PasswordStrength';
import AudioPlayer from './pages/audioplayer/AudioPlayer';
import IndexPage from './IndexPage';

var routesConfig = [
    {
        path   : '/',
        text : 'Home',
        desc : 'Home Page',
        component: IndexPage,
        customProps: {  skipHome: true }
    },
    {
        path   : '/pages/todoapp',
        text : "To-do's",
        desc : 'App to make a to-do list using checkboxes',
        component: TodoApp
    },
    {
        path   : '/pages/audioplayer',
        text : 'Audio Player',
        desc : 'Audio player with controls',
        component: AudioPlayer
    },
    {
        path   : '/pages/passwordstrength',
        text : 'Password Strength',
        desc : 'Simple App to check password strength',
        component: PasswordStrength
    },
];

export default routesConfig;
