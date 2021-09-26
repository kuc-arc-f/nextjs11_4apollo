import Link from 'next/link';
//import Header from '../Layout/AppHead';

const IndexRow = props => (
  <li>
    ID: {props.id} , 
    <Link href={`/todos/${props.id}`}>
      <a>{props.title}</a>
    </Link>
    <Link href={`/todos/edit/${props.id}`}>
      <a>[ edit ]</a>
    </Link>    
  </li>
);
export default IndexRow;
