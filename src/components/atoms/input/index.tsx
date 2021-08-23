import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface InputProps{
  onInsert: (title: string) => void;
}

const InputStyle = styled.input`
  width: 256px;
  height: 24px;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
`

const Input = ({onInsert}: InputProps) => {
  const [title, setTitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !!title.trim() && onInsert(title.trim());
    setTitle("");
  }, [onInsert, title])

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, [])
 
  return (
    <form onSubmit={onSubmit}>
      <InputStyle onChange={handleChange} value={title} placeholder="할 일을 적어주세요." ref={ref}/>
    </form>
  );
};

export default Input;
