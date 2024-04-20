export default function BinaryTree({ root }) {
  return (
    <div className="tree-components">
    <div className="circle-left">
      <p>Left Child: {root.left && typeof root.left.value === 'object' ? root.left.value : 'NULL'}</p>
    </div>
    <div className="circle-root">
      <p>Root: {root.value}</p>
    </div>
    <div className="circle-right">
      <p>Right Child: {root.right && typeof root.right.value === 'object' ? root.right.value : 'NULL'}</p>
    </div>
  </div>
  );
}