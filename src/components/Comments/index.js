import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CommentItem from "../CommentItem";
import "./index.css";

const Comments = () => {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeCommentText = (event) => {
    setCommentText(event.target.value);
  };

  const onSubmmitComment = (event) => {
    event.preventDefault();
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    };
    setCommentsList((prevStateList) => [...prevStateList, newComment]);
    setName("");
    setCommentText("");
  };

  return (
    <div className="cooment_bg">
      <form className="comments_card" onSubmit={onSubmmitComment}>
        <input
          type="text"
          className="name_"
          placeholder="name"
          onChange={onChangeName}
          value={name}
        />
        <textarea
          rows="10"
          cols="40"
          className="comment_text"
          placeholder="Comment......."
          onChange={onChangeCommentText}
          value={commentText}
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
      {commentsList.map((each) => (
        <CommentItem each={each} key={each.id} />
      ))}
    </div>
  );
};
export default Comments;
