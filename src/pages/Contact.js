import { useEffect, useState } from "react";

const Contact = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <div>
      <h1>Blog Articles</h1>
      <h1>I've rendered {count} times!</h1>
    </div>
  );
};

export default Contact;
