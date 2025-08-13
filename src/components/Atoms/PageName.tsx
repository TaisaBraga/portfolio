interface IPageNameProps {
  identifyName: string;
}

function PageName({ identifyName }: IPageNameProps) {
  return (
    <div
      style={{
        backgroundColor: "#A3B18A",
        borderRadius: "5px",
        color: "white",
        padding: "0.7em",
        margin: "1em 0",
        width: "10em",
        textAlign: "center",
        fontSize: "1em",
        textTransform: "uppercase"
      }}
    >
      {identifyName}
    </div>
  );
}

export default PageName;
