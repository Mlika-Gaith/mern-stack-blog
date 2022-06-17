import "bootstrap/dist/css/bootstrap.min.css";
import "./Pagination.css";
export default function Pagination(props) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <a
            href="#"
            className="page-link"
            onClick={() => props.paginate(number)}
          >
            {number}
          </a>
        </li>
      ))}
    </nav>
  );
}
