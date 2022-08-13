export const SortTable = (props) => {
  return (
    <div className="container-setinhas">
      <div
        className="up"
        onClick={() => {
          props.up()
        }}
      >
        &#129093;
      </div>
      <div
        className="down"
        onClick={() => {
          props.down()
        }}
      >
        &#129095;
      </div>
    </div>
  )
}
