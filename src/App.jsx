import AppRoutes from './routes/AppRoutes';
import './App.css';

export default function App() {
    // Callback function to log the render information
    function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
        console.log(`ID: ${id}, Phase: ${phase}, Actual duration: ${actualDuration}, Base duration: ${baseDuration}, Start time: ${startTime}, Commit time: ${commitTime}`);
    };

    return (
        <AppRoutes onRender={onRenderCallback} />
    );
};