import cn from "classnames";
import type { HTMLAttributes } from "react";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  item: INote;
  onRemove: (id: INote["id"]) => void;
}

function CrudNote({ className, item, onRemove }: Props) {
  return (
    <div className={cn(className, "crud-note")} data-id={item.id}>
      <p className="crud-note__content">{item.content}</p>
      <button className="crud-note__btn-remove" type="button" onClick={() => onRemove(item.id)}>✘</button>
    </div>
  );
}

export default CrudNote;
