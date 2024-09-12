import BaseService from "../services/BaseService";
import CrudForm from "./CrudForm.tsx";
import CrudNote from "./CrudNote.tsx";
import { useEffect, useState } from "react";

function Crud() {
  const service = new BaseService("/notes");

  const [notes, setNotes] = useState<INote[]>([]);

  const handleRemove = (id: INote["id"]) => {
    service.delete({ url: `/${id}` })
      .then(() => {
        loadNotes();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSubmit = (f: INoteForm) => {
    service.post({ payload: { ...f, id: 0 } })
      .then(() => {
        loadNotes();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleUpdate = () => {
    loadNotes();
  };
  const loadNotes = () => {
    service.get({})
      .then(response => response.json())
      .then((data) => {
        setNotes(() => data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="crud">
      <div className="crud__header">
        <h1 className="crud__title">Notes</h1>
        <button className="crud__btn-update" type="button" onClick={handleUpdate}>⭮</button>
      </div>
      <div className="crud__notes">
        {notes.map(note => (
          <CrudNote className="crud__note" item={note} key={note.id} onRemove={handleRemove} />
        ))}
      </div>
      <CrudForm className="crud__form" onSubmit={handleSubmit} />
    </div>
  );
}

export default Crud;
