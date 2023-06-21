export default function List({ bugs }) {
  return (
    <ul>
      {bugs.map((bug) => {
        const { id, title, description } = bug;
        return (
          <li key={id}>
            <strong>{title}:</strong>
            {` ${description}`}
          </li>
        );
      })}
    </ul>
  );
}
