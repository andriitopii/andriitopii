import { useEffect, useRef, useState } from "react";
import "./EditorText.scss";
import AddSvg from "../Icon/AddSvg";
import DragIndicatorSvg from "../Icon/DragIndicatorSvg";
import BoldSvg from "../Icon/BoldSvg";
import LinkSvg from "../Icon/LinkSvg";
const H1Editor = ({ children, style }) => {
  const [initialText, setInitialText] = useState("Заголовок H1");
  const isEmpty = (e) => {
    if (e === "") {
      setInitialText("Заголовок H1");
    }
  };
  return (
    <h1>
      <pre
        style={style}
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={(e) => isEmpty(e.target.innerText)}
        onInput={(e) => setInitialText(e.target.value)}
      >
        {initialText === "" ? "Заголовок H1" : initialText}
      </pre>
    </h1>
  );
};

const EditorText = () => {
  const [showAddMenu, setShowAddMenu] = useState("");
  const [content, setContent] = useState([]);
  const [floatToolPosition, setFloatToolPosition] = useState({});
  const [takeItem, setTakeItem] = useState(null);
  const [overItem, setOverItem] = useState(null);

  const complete = useRef(null);
  const currentElement = useRef(null);
  function floatTool(e) {
    const focusElement = e.target.getBoundingClientRect();
    const left = focusElement.left;
    const top = focusElement.top;
    setFloatToolPosition({
      display: "flex",
      left: left + "px",
      top: top - 60 + "px",
    });
  }
  function addH1() {
    setContent([
      ...content,
      <H1Editor style={{ order: content.length }}></H1Editor>,
    ]);
  }

  function dragStart(event, item) {
    console.log(item.dataTransfer);
    setTakeItem(item);
  }
  function dragOver(event, item) {
    event.preventDefault();
   
    item.classList.add("editor__content_element--over-drag");
    
    
    setOverItem(item);
    
  }

  function dragLeave(e, item) {
    e.preventDefault()
    item.classList.remove("editor__content_element--over-drag");
  }

  function dragDrop(event, item) {
    
    const takeAttr = takeItem.getAttribute("style");
    const overAttr = overItem.getAttribute("style");
    takeItem.setAttribute("style", overAttr);
    overItem.setAttribute("style", takeAttr);
    item.classList.remove("editor__content_element--over-drag");
    }
  function dragEnd(e, item) {
    item.classList.remove("editor__content_element--over-drag");
  }

  return (
    <div className="editor">
      <ul className="editor__float-tool" style={floatToolPosition}>
        <li>
          <button>
            <BoldSvg width="24px" height="24px" />
          </button>
        </li>
        <li>
          <button>
            <LinkSvg width="24px" height="24px" />
          </button>
        </li>
        <li>
          <button>
            <LinkSvg width="24px" height="24px" />
          </button>
        </li>
      </ul>

      <div className="editor__content" ref={complete}>
        {content
          .sort((a, b) => a - b)
          .map((item, index) => (
            <span
              style={{ order: index }}
              key={index}
              draggable
              onDragStart={(e) => dragStart(e, e.currentTarget)}
              onDragOver={(e) => dragOver(e, e.currentTarget)}
              onDragLeave={(e) => dragLeave(e, e.currentTarget)}
              onDrop={(e) => dragDrop(e, e.currentTarget)}
              onDragEnd={(e) => dragEnd(e, e.currentTarget)}
              onFocus={(e) => floatTool(e)}
              onBlur={() => setFloatToolPosition({ display: "none" })}
              className="editor__content_element"
            >
              <DragIndicatorSvg width="24px" height="24px" />
              {item}
            </span>
          ))}
      </div>

      <div className="editor__add">
        <button
          className="editor__add_button"
          onClick={() => setShowAddMenu("editor__add_list--show")}
        >
          <AddSvg width="24px" height="24px" />
        </button>
        <ul
          className={`editor__add_list ${showAddMenu}`}
          onMouseLeave={() => setShowAddMenu("")}
        >
          <li onClick={() => addP()}>Paragraph</li>
          <li onClick={() => addH1()}>H1</li>
          <li onClick={() => addH2()}>H2</li>
          <li onClick={() => addH3()}>H3</li>
          <li onClick={() => addCode()}>Code</li>
          <li onClick={() => addImage()}>Image</li>
          <li onClick={() => addLink()}>Link</li>
          <li onClick={() => addVideo()}>Video</li>
        </ul>
      </div>
    </div>
  );
};

export default EditorText;
