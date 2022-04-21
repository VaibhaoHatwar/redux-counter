import { useSelector, useDispatch } from "react-redux"
import { increment } from "./actions"
import { decrement } from "./actions"
import { reset } from "./actions"

const App = () => {
  const counter = useSelector((state) => state.counter)
  const isLogged = useSelector((state) => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-6  text-center">
          <h2>redux counter</h2>
          <h1>{counter}</h1>
          <div className="btn-group py-3">
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch(decrement())}
            >
              decrease
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => dispatch(reset())}
            >
              reset
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => dispatch(increment())}
            >
              increase
            </button>
          </div>
          {isLogged ? <h3>Valuable information I shouldn't see</h3> : ""}
        </div>
      </div>
    </div>
  )
}

export default App
