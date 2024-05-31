
const ChangeName = (props) => {
    let {name,onUpdate}=props;
  return (
    <div className="container mt-3 bg-primary-subtle">
       <div> {name}</div>
        <button className="btn btn-warning" onClick={onUpdate}>
            Changename
        </button>
        </div>
  )
}

export default ChangeName;