import { useState,useEffect } from "react";
import BinaryTree from '../Core/BinaryTree'
import StartButton from "../StartButton/StartButton";
import PopUpModal from "../Modal/PopUpModal";
import TreeNodeVisualizer from "../Core/BinaryTreeVisualizer";
import { INITIAL_NODE } from "../../../common/constants";
import { v4 as uuid_v4 } from "uuid";

export default function Body(){

  const [nodeArray, setNodeArray] = useState([]);

  const [id, setId] = useState(uuid_v4());

  const [modal, setModal] = useState(false);

  const [start, setStart] = useState(false);

  const [currentNode, setCurrentNode] = useState(INITIAL_NODE);

  const [promptMessage, setMessage] = useState('');

  const [insertingLeft, setInsertingLeft] = useState(true);

  const [showTree, setShowTree] = useState(false);

  const [counter,setCounter] = useState(1);

  const [leftNodes,setLeafNodes] = useState([]);

  const closeModal = () => {
    setModal(false);
  };

  const printTree = () => {
    setShowTree(true);
    closeModal(); 
  };

  const isPrime = (value) => {
    if (value <= 1) {
        return false; 
    } 
    for (let i = 2; i <= value / 2; i++) {
        if (value % i === 0) {
            return false; 
        }
    }
    return true;
}

  const insertNodeRecursively = (node) => {
    
    if (node === null) return;
    if (node.left === null && insertingLeft) {
      setMessage(`Insert left child of ${node.value}`);
      setCurrentNode(node);
      setTimeout(() => {
        setModal(true);
        setInsertingLeft(!insertingLeft);
      }, 500);

    } if (node.right === null && !insertingLeft) {
      setMessage(`Insert right child of ${node.value}`);
      setCurrentNode(node);
      setInsertingLeft(!insertingLeft);
    setTimeout(() => {
        setModal(true);
      }, 500);
    } 
 
    else if(isPrime(counter) && counter > 10){
      setNodeArray((prevNodeArray) => [...prevNodeArray,node]);
      setCurrentNode(nodeArray[Math.floor(counter/2) + 1]);
      setCounter(counter + 1);
      setTimeout(() => {
        setModal(true);
      }
    ,500);
    }
    
    else {
      setNodeArray((prevNodeArray) => [...prevNodeArray, node]);
      setCounter(counter + 2);
      insertNodeRecursively(node.left);
      insertNodeRecursively(node.right);
    }
  };
  
  const handleSubmitValue = (value) => {
    if (value !== null && !Number.isNaN(parseInt(value))) {
      let newNode = null;
      if (currentNode.left === null) {
        newNode = {
          id : id, 
          value: parseInt(value),
          left: null,
          right: null,
          position :{
            x : 0,
            y : 0
          }
        };
        setId(uuid_v4()); 
        setCurrentNode((prevNode) => ({
          ...prevNode,
          left: newNode,
        }));
      } else if (currentNode.right === null) {
        newNode = {
          id: id, 
          value: parseInt(value),
          left: null,
          right: null,
          position :{
            x : 0,
            y : 0
          }
        };
        setId(uuid_v4()); 
        setCurrentNode((prevNode) => ({
          ...prevNode,
          right: newNode,
        }));
      }
      if (newNode !== null) {
        setLeafNodes((prevValue) => [...prevValue, newNode]);
      }
      closeModal();
    }
  };
  
  useEffect(() => {
    if (start) {
      insertNodeRecursively(currentNode);
    }
  }, [currentNode, start]);



return (
    <>
     {showTree ? (
          <TreeNodeVisualizer leafNodes={leftNodes} nodeArray={nodeArray} />
        ) : (
          <>
            <BinaryTree root={currentNode} />
            <div className='button-container'>
            <StartButton start={() => setStart(true)} /> 
            </div> 
          </> 
        )
        }
        {modal && <PopUpModal printTree={printTree} submitValue={handleSubmitValue} message={promptMessage} />} 
    </>
)
}