interface pageNameProps {
  identifyName: string;
}

function PageName({ identifyName }: pageNameProps) {
  return (
    <div
      style={{
        backgroundColor: "#A3B18A",
        borderRadius: "5px",
        color: "white",
        padding: "0.8em",
        margin: "1em 0",
        width: "6em",
        textAlign: "center",
      }}
    >
      {identifyName}
    </div>
  );
}

export default PageName;
