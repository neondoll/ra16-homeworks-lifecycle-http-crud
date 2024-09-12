import cn from "classnames";
import { useState } from "react";
import type { ChangeEvent, FormEvent, HTMLAttributes } from "react";

interface Props {
  className?: HTMLAttributes<HTMLFormElement>["className"];
  onSubmit: (form: INoteForm) => void;
}

function CrudForm({ className, onSubmit }: Props) {
  const [form, setForm] = useState<INoteForm>({ content: "" });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(form);
    setForm({ content: "" });
  };

  return (
    <form autoComplete="off" className={cn(className, "crud-form")} onSubmit={handleSubmit}>
      <div className="crud-form__group">
        <label className="crud-form__label" htmlFor="content">New Note</label>
        <textarea
          className="crud-form__textarea"
          id="content"
          name="content"
          required
          value={form.content}
          onChange={handleChange}
        />
      </div>
      <button className="crud-form__btn" type="submit">Add</button>
    </form>
  );
}

export default CrudForm;
