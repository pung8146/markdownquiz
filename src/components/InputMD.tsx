import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function InputMD() {
  const [input, setInput] = useState("");
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const savedMarkdown = localStorage.getItem("markdown");
    if (savedMarkdown) {
      setMarkdown(savedMarkdown);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem("markdown", input);
    setMarkdown(input);
    setInput("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleChange}
          placeholder="MD형식의 문서를 붙여 넣어주세요"
        />
        <button type="submit">변환하기</button>
        <button type="reset">취소하기</button>
      </form>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
