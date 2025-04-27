// export default function Button({ className, text }) {
//   return <button className={className}>{text}</button>;
// }

export default function Button({ className, text, children, onClick, ...props }) {
  return (
    <button className={className} onClick={onClick}
      {...props}>
      {children || text}
    </button>
  );
}
