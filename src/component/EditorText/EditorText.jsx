import { useEffect, useRef, useState } from "react";
import "./EditorText.scss";
import AddSvg from "../Icon/AddSvg";
import DragIndicatorSvg from "../Icon/DragIndicatorSvg";
import BoldSvg from "../Icon/BoldSvg";
import LinkSvg from "../Icon/LinkSvg";
import ItalicSvg from "../Icon/ItalicSvg";
const H1Editor = () => {
  const [initialText, setInitialText] = useState("Заголовок H1");
  const isEmpty = (e) => {
    if (e === "") {
      setInitialText("Заголовок H1");
    }
  };
  return (
    <h1>
      <pre
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
const H2Editor = () => {
  const [initialText, setInitialText] = useState("Заголовок H2");
  const isEmpty = (e) => {
    if (e === "") {
      setInitialText("Заголовок H2");
    }
  };
  return (
    <h2>
      <pre
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={(e) => isEmpty(e.target.innerText)}
        onInput={(e) => setInitialText(e.target.value)}
      >
        {initialText === "" ? "Заголовок H2" : initialText}
      </pre>
    </h2>
  );
};
const H3Editor = () => {
  const [initialText, setInitialText] = useState("Заголовок H3");
  const isEmpty = (e) => {
    if (e === "") {
      setInitialText("Заголовок H3");
    }
  };
  return (
    <h3>
      <pre
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={(e) => isEmpty(e.target.innerText)}
        onInput={(e) => setInitialText(e.target.value)}
      >
        {initialText === "" ? "Заголовок H3" : initialText}
      </pre>
    </h3>
  );
};

const PEditor = () => {
  const [initialText, setInitialText] = useState("Параграф");
  const isEmpty = (e) => {
    if (e === "") {
      setInitialText("Параграф");
    }
  };

  return (
    <p
      className="achor"
      contentEditable={true}
      suppressContentEditableWarning={true}
      onBlur={(e) => isEmpty(e.target.innerText)}
      onInput={(e) => setInitialText(e.target.value)}
    >
      <span className="span-unbold">
        {initialText === "" ? "Параграф" : initialText}
      </span>
    </p>
  );
};
const CodeEditor = () => {
  const [initialText, setInitialText] = useState("Код");
  const isEmpty = (e) => {
    if (e === "") {
      setInitialText("Код");
    }
  };
  return (
    <pre
      contentEditable={true}
      suppressContentEditableWarning={true}
      onBlur={(e) => isEmpty(e.target.innerText)}
      onInput={(e) => setInitialText(e.target.value)}
    >
      <code className="achor">{initialText === "" ? "Код" : initialText}</code>
    </pre>
  );
};
const ImageEditor = () => {
  const [initialText, setInitialText] = useState("IMG");
  const isEmpty = (e) => {
    if (e === "") {
      setInitialText("IMG");
    }
  };
  return (
    <code>
      <pre
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={(e) => isEmpty(e.target.innerText)}
        onInput={(e) => setInitialText(e.target.value)}
      >
        {initialText === "" ? "IMG" : initialText}
      </pre>
    </code>
  );
};
const LinkEditor = () => {
  const [initialText, setInitialText] = useState("LINK");
  const isEmpty = (e) => {
    if (e === "") {
      setInitialText("LINK");
    }
  };
  return (
    <code>
      <pre
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={(e) => isEmpty(e.target.innerText)}
        onInput={(e) => setInitialText(e.target.value)}
      >
        {initialText === "" ? "LINK" : initialText}
      </pre>
    </code>
  );
};
const VideoEditor = () => {
  const [initialText, setInitialText] = useState("Video");
  const isEmpty = (e) => {
    if (e === "") {
      setInitialText("Video");
    }
  };
  return (
    <code>
      <pre
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={(e) => isEmpty(e.target.innerText)}
        onInput={(e) => setInitialText(e.target.value)}
      >
        {initialText === "" ? "Video" : initialText}
      </pre>
    </code>
  );
};
const UlEditor = () => {
  const [initialText, setInitialText] = useState("Ul");
  const isEmpty = (e) => {
    if (e === "") {
      setInitialText("UL");
    }
  };
  return (
    <code>
      <pre
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={(e) => isEmpty(e.target.innerText)}
        onInput={(e) => setInitialText(e.target.value)}
      >
        {initialText === "" ? "UL" : initialText}
      </pre>
    </code>
  );
};
const EditorText = () => {
  const [showAddMenu, setShowAddMenu] = useState("");
  const [content, setContent] = useState([]);
  const [floatToolPosition, setFloatToolPosition] = useState({});
  const [takeItem, setTakeItem] = useState(null);
  const [overItem, setOverItem] = useState(null);
  const [linkShowInput, setLinkShowInput] = useState(false)
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
  function addElement(item) {
    switch (item) {
      case "H1":
        setContent([...content, <H1Editor></H1Editor>]);
        break;
      case "H2":
        setContent([...content, <H2Editor></H2Editor>]);
        break;
      case "H3":
        setContent([...content, <H3Editor></H3Editor>]);
        break;
      case "P":
        setContent([...content, <PEditor></PEditor>]);
        break;
      case "CODE":
        setContent([...content, <CodeEditor></CodeEditor>]);
        break;
      case "IMAGE":
        setContent([...content, <ImageEditor></ImageEditor>]);
        break;
      case "LINK":
        setContent([...content, <LinkEditor></LinkEditor>]);
        break;
      case "VIDEO":
        setContent([...content, <VideoEditor></VideoEditor>]);
        break;
      case "UL":
        setContent([...content, <UlEditor />]);
        break;
    }
  }

  //логіка сортування елементів
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
    e.preventDefault();
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
 
  
  //  Функції foatTools
  function floatToolAction(action, url) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const surroundNode = document.createElement("span");
    const surroundNodeA = document.createElement("a");
    const nodeMirror = range.startContainer.parentElement.className;
    //ACTION REBLACE
    const replaceNode = (act) => {
      switch (act) {
        case "BOLD":
          {
            const extractElement = range.extractContents();
            const textNode = document.createTextNode(
              extractElement.textContent
            );
            surroundNode.classList.add("span-bold");
            surroundNode.appendChild(textNode);
            range.insertNode(surroundNode);
            selection.removeAllRanges();
          }
          break;
        case "UNBOLD":
          {
            const extractElement = range.extractContents();
            const textNode = document.createTextNode(
              extractElement.textContent
            );
            surroundNode.classList.add("span-unbold");
            surroundNode.appendChild(textNode);
            range.insertNode(surroundNode);
            selection.removeAllRanges();
          }
          break;
        case "UNBOLD-SWITCH":
          range.startContainer.parentElement.classList.remove("span-bold");
          range.startContainer.parentElement.classList.add("span-unbold");
          selection.removeAllRanges();
          break;
        case "BOLD-SWITCH":
          range.startContainer.parentElement.classList.remove("span-unbold");
          range.startContainer.parentElement.classList.add("span-bold");
          selection.removeAllRanges();
          break;
        case "ITALIC-BOLD":
          {
            const extractElement = range.extractContents();
            const textNode = document.createTextNode(
              extractElement.textContent
            );
            surroundNode.classList.add("span-italic");
            surroundNode.classList.add("span-bold");
            surroundNode.appendChild(textNode);
            range.insertNode(surroundNode);
            selection.removeAllRanges();
          }
          break;
          case "ITALIC":
          {
            const extractElement = range.extractContents();
            const textNode = document.createTextNode(extractElement.textContent);
            surroundNode.classList.add("span-italic");
            surroundNode.appendChild(textNode);
            range.insertNode(surroundNode);
            selection.removeAllRanges();
          }
          break;
          case "UNITALIC":
          {
            const extractElement = range.extractContents();
            const textNode = document.createTextNode(extractElement.textContent);
            surroundNode.classList.add("span-unitalic");
            surroundNode.appendChild(textNode);
            range.insertNode(surroundNode);
            selection.removeAllRanges();
          }
          break;
          case "UNITALIC-SWITCH":
          {
            range.startContainer.parentElement.classList.remove("span-italic");
            range.startContainer.parentElement.classList.add("span-unitalic");
          
            selection.removeAllRanges();
          }
          break;
          case "ITALIC-SWITCH":
          {
            range.startContainer.parentElement.classList.remove("span-unitalic");
            range.startContainer.parentElement.classList.add("span-italic");
          
            selection.removeAllRanges();
          }
          break;
      }
    };

    switch (action) {
      case "BOLD":
        if (
          range.startContainer.parentElement ===
          range.endContainer.parentElement
        ) {
          console.log("ОДИНАКОВІ КОНТЕЙНЕРИ");
          if (
            range.startOffset === 0 &&
            range.startContainer.parentElement.textContent.length ===
              range.endOffset
          ) {
            switch (nodeMirror) {
              case "achor":
                case "span-italic":
                replaceNode("BOLD");
                break;
              case "span-unbold":
                replaceNode("BOLD-SWITCH");
                break;
              case "span-bold":
                replaceNode("UNBOLD-SWITCH");
                break;
                default: 
                replaceNode("BOLD");
                break;
            }
          } else {
            console.log("ВІДІЛЕНО В СЕРЕДИНІ ОДИНАКОВИХ КОНТЕЙНЕРІВ");
            console.log(nodeMirror);

            switch (nodeMirror) {
              case "achor":
              case "span-unbold":
                replaceNode("BOLD");
                break;
              case "span-bold":
                replaceNode("UNBOLD");
                default:
                  replaceNode("BOLD")
            }
          }
        } else if (
          range.startContainer.parentElement != range.endContainer.parentElement
        ) {
          console.log("РІЗНІ КОНТЕЙНЕРИ");
          console.log(nodeMirror);
          switch (nodeMirror) {
            case "achor":
            case "span-unbold":
              replaceNode("BOLD");
              break;
            case "span-bold":
              replaceNode("UNBOLD");
              break;
              
          }
        }
        break;
      case "ITALIC":
        if (
          range.startContainer.parentElement ===
          range.endContainer.parentElement
        ) {
          console.log("ОДИНАКОВІ КОНТЕЙНЕРИ");
          if (range.startOffset === 0 && range.startContainer.parentElement.textContent.length === range.endOffset) {
            console.log(
              "ВІДІЛЕНО ВЕСЬ ТЕКСТ В СЕРЕДИНІ ОДИНАКОВИХ КОНТЕЙНЕРІВ"
            );
            switch(nodeMirror){
              case "achor":
              case "span-unbold":
                replaceNode("ITALIC");
                break;
              case "span-italic":
                replaceNode("UNITALIC-SWITCH");
                console.log("Sss");
                break;
                case "span-unitalic":
                replaceNode("ITALIC-SWITCH");
                break;
                case "span-bold":
                replaceNode("UNITALIC");
                break;
                
            }
          } else {
            console.log("ВІДІЛЕНО В СЕРЕДИНІ ОДИНАКОВИХ КОНТЕЙНЕРІВ");
            switch(nodeMirror){
              case "achor":
                replaceNode("ITALIC")
                break;
                case "span-italic":
                  replaceNode("UNITALIC");
                  break;
                  case "span-unitalic":
                  replaceNode("ITALIC");
                  break;
                  case "span-bold":
                    replaceNode("ITALIC-BOLD");
                    break;
            }
          }
        } else if (
          range.startContainer.parentElement != range.endContainer.parentElement
        ) {
          console.log("РІЗНІ КОНТЕЙНЕРИ");
          
            switch (nodeMirror) {
              case "achor":
              case "span-unbold":
                replaceNode("ITALIC");
                break;
              case "span-bold":
                replaceNode("ITALIC-BOLD");
                break;
                case "span-italic":
                replaceNode("ITALIC");
                break;
            } 
            
        }
        break;

      case "LINK":
        if (
          range.startContainer.parentElement ===
          range.endContainer.parentElement
        ) {
          console.log("ОДИНАКОВІ КОНТЕЙНЕРИ");
          if (
            range.startOffset === 0 &&
            range.startContainer.parentElement.textContent.length ===
              range.endOffset
          ) {
            console.log(
              "ВІДІЛЕНО ВЕСЬ ТЕКСТ В СЕРЕДИНІ ОДИНАКОВИХ КОНТЕЙНЕРІВ"
            );
          } else {
            console.log("ВІДІЛЕНО В СЕРЕДИНІ ОДИНАКОВИХ КОНТЕЙНЕРІВ");
          }
        } else if (
          range.startContainer.parentElement != range.endContainer.parentElement
        ) {
          console.log("РІЗНІ КОНТЕЙНЕРИ");
        }
        break;
        break;
    }
  }
  function floatLinkAdd(e){
    if(e.key === "Enter" && e.target.value != "")
    {
      floatToolAction("LINK", e.target.value)
    }
  }
  return (
    <div className="editor">
      <ul
        className="editor__float-tool"
        onMouseLeave={() => setFloatToolPosition({ display: "none" })}
        style={floatToolPosition}
      >
        <li>
          <button onClick={() => floatToolAction("BOLD")}>
            <BoldSvg width="24px" height="24px" />
          </button>
        </li>
        <li>
          <button onClick={() => floatToolAction("ITALIC")}>
            <ItalicSvg width="24px" height="24px" />
          </button>
        </li>
        <li>
          <button onClick={() => setLinkShowInput(!linkShowInput)}>
            <LinkSvg width="24px" height="24px" />
            
          </button>
          {linkShowInput && <input type="url" placeholder="Введіть посилання" onKeyDown={floatLinkAdd}></input> }
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
              onFocus={(e) => floatTool(e, e.currentTarget)}
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
          <li onClick={() => addElement("H1")}>
            <h1>Заголовок H1</h1>
          </li>
          <li onClick={() => addElement("H2")}>
            <h2>Заголовок H2</h2>
          </li>
          <li onClick={() => addElement("H3")}>
            <h3>Заголовок H3</h3>
          </li>
          <li onClick={() => addElement("P")}>
            <p>Параграф</p>
          </li>
          <li onClick={() => addElement("CODE")}>
            <code>Код</code>
          </li>
          <li onClick={() => addElement("UL")}>Список</li>
          <li onClick={() => addElement("IMAGE")}>Image</li>
          <li onClick={() => addElement("LINK")}>Link</li>
          <li onClick={() => addElement("VIDEO")}>Video</li>
        </ul>
      </div>
    </div>
  );
};

export default EditorText;
