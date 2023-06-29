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

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={handleChange}
          placeholder="MD형식의 문서를 붙여 넣어주세요"
          rows={10}
          cols={50}
        />
        <button type="submit">변환하기</button>
        <button type="reset">취소하기</button>
      </form>
      <div style={{ textAlign: "left" }}>
        {" "}
        {/* 추가된 스타일 */}
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
