import { useCallback, useState } from "react";

interface InputProps{
  onInsert: (title: string) => void;
}

const Input = ({onInsert}: InputProps) => {
  const [title, setTitle] = useState<string>("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !!title.trim() && onInsert(title.trim());
    setTitle("");
  }, [onInsert, title])
 
  return (
    <form onSubmit={onSubmit}>
      <input onChange={handleChange} value={title} placeholder="할 일을 적어주세요."></input>
    </form>
  );
};

export default Input;
