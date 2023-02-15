import "./inlineStyle.css";

const InlineStyle = () => {
  const headlineStyle = {
    color: "red",
    fontFamily: "arial",
  };

  return (
    <>
      <h1 style={headlineStyle}>InlineStyle</h1>
      <h2 style={{ color: "green", backgroundColor: "black" }}>subtitle</h2>
      <p className="red">ppppppp</p>
    </>
  );
};

export default InlineStyle;
