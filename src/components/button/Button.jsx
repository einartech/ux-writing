// export default function Button({ className, text }) {
//   return <button className={className}>{text}</button>;
// }

export default function Button({ className, text, children, ...props }) {
  return (
    <button className={className} {...props}>
      {children || text}
    </button>
  );
}
