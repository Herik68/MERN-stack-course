import Card from "./Card";

const Listbox = (props) => {
  return (
    <>
      {
        props.userInfo.length > 0 ? props.userInfo.map((info) => {
            return (
              <Card css="card-list" key={info.email}>
                <div className="list">
                  <p>Name : {info.name}</p>
                  <p>From : {info.live}</p>
                  <p>Email: {info.email}</p>
                </div>
              </Card>
            );
          }) : (
            <>
            <Card css="card-list">
                <p className="text-center">Add a new user right now !</p>
            </Card>
            </>
          )
      }
    </>
  );
};

export default Listbox;
