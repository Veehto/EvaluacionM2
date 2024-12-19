export default function Service({ name, location }) {
    return (
        <li className="list-group-item">{name}, {location}</li>
    );
}