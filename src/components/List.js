import Item from "./Item";
import works from "../json/works.json";

export default function List() {
  return (
    <div className="row">
      {works.map(work => (
        <Item key={work.id} work={work}/>
      ))}
    </div>
  );
}