import "./index.scss";

export default ({ headers, columns }) => {
  return (
    <table className="tableContainer">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {columns.map(({ id, target, type, date }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{new Date(date * 1).toString()}</td>
            <td>{type}</td>
            <td>{target}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
