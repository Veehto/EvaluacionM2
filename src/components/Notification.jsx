export default function Notification({ message }) {
    const styles = {
        color: 'red'
    };

    return (
        <div style={styles}>
            {message}
        </div>
    );
};