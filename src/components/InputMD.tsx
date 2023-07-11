import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 1em;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  min-width: 500px;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  transition: all 0.3s;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResetButton = styled(Button)`
  margin-top: 0.5em;
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

const MarkdownWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 1em;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
  }
`;

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
      <Form onSubmit={handleSubmit}>
        <TextArea
          value={input}
          onChange={handleChange}
          placeholder="MD형식의 문서를 붙여 넣어주세요"
          rows={10}
          cols={50}
        />
        <SubmitButton type="submit">변환하기</SubmitButton>
        <ResetButton type="reset">취소하기</ResetButton>
      </Form>
      <MarkdownWrapper style={{ textAlign: "left" }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </MarkdownWrapper>
    </div>
  );
}
