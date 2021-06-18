const Characters = ({records}) => {
  return (
    <div className="container-fluid">

      <div className="row">
        { 
          records.map( record => {
            return <div className="flip-card"> 
              <div key={record.id} className="flip-card-inner">
                <img className="flip-card-front" src={record.imageUrl} style={{height: "100%", width: "100%", padding: "10px"}} alt="" />
                <div className="flip-card-back">
                  <h1>{record.fullName}</h1>
                  <hr />
                  <p>Title: {record.title}</p>
                  <p>Family: {record.family}</p>
                </div>
              </div>
            </div>

          })
        }
      </div>
    </div>
  );
}
 
export default Characters;