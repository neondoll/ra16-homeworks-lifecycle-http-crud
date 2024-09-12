/// <reference types="vite/client" />

type INoteForm = Omit<INote, "id">;

interface INote {
  id: number;
  content: string;
}
