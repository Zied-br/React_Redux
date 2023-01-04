import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, doneTask, editTask } from "../Actions/taskAction";
import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import "../AppRedux.css";
const Task = ({ search }) => {
  const task = useSelector((state) => state.taskReducer);

  const dispatch = useDispatch();
  const listDone = task?.filter((elem) => elem.isDone === true);

  const listNotDone = task?.filter((elem) => elem.isDone === false);

  const [desc, setDesc] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, setId] = useState("");
  const [desic, setDesic] = useState("");
  return (
    <div>
      {search !== "all" ? (
        <div>
          {search === "done" ? (
            <h4>
              {listDone.map((el, i) => (
                <section key={i}>
                  <div className="flexOptions">
                    <div style={{ textDecoration: "line-through" ,opacity:"0.5"}} className="parag"> {el.description}</div>
                    <div>
                      <i
                        className="fa fa-check-square-o"
                        aria-hidden="true"
                        onClick={() => dispatch(doneTask(el.id))}
                      ></i>
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                        onClick={() => {
                          handleShow();
                          setId(el.id);
                          setDesic(el.description);
                        }}
                      ></i>
                      <i
                        className="fa fa-minus-square-o"
                        aria-hidden="true"
                        onClick={() => dispatch(deleteTask(el.id))}
                      ></i>
                    </div>
                  </div>
                </section>
              ))}
            </h4>
          ) : (
            <h4>
              {listNotDone.map((el, i) => (
                <section key={i}>
                  <div className="flexOptions">
                    <div className="parag">{el.description}</div>
                    <div>
                      <i
                        className="fa fa-square-o"
                        aria-hidden="true"
                        onClick={() => dispatch(doneTask(el.id))}
                      ></i>
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                        onClick={() => {
                          handleShow();
                          setId(el.id);
                          setDesic(el.description);
                        }}
                      ></i>
                      <i
                        className="fa fa-minus-square-o"
                        aria-hidden="true"
                        onClick={() => dispatch(deleteTask(el.id))}
                      ></i>
                    </div>
                  </div>
                </section>
              ))}
            </h4>
          )}
        </div>
      ) : (
        <h4>
          {listDone.map((el, i) => (
            <section key={i}>
              <div className="flexOptions">
                <div style={{ textDecoration: "line-through" ,opacity:"0.5"}} className="parag"> {el.description}</div>
                <div>
                  <i
                    className="fa fa-check-square-o"
                    aria-hidden="true"
                    onClick={() => dispatch(doneTask(el.id))}
                  ></i>
                  <i
                    className="fa fa-pencil-square-o"
                    aria-hidden="true"
                    onClick={() => {
                      handleShow();
                      setId(el.id);
                      setDesic(el.description);
                    }}
                  ></i>
                  <i
                    className="fa fa-minus-square-o"
                    aria-hidden="true"
                    onClick={() => dispatch(deleteTask(el.id))}
                  ></i>
                </div>
              </div>
            </section>
          ))}

          {listNotDone.map((el, i) => (
            <section key={i}>
              <div className="flexOptions">
                <div className="parag">{el.description}</div>
                <div>
                  <i
                    className="fa fa-square-o"
                    aria-hidden="true"
                    onClick={() => dispatch(doneTask(el.id))}
                  ></i>
                  <i
                    className="fa fa-pencil-square-o"
                    aria-hidden="true"
                    onClick={() => {
                      handleShow();
                      setId(el.id);
                      setDesic(el.description);
                    }}
                  ></i>
                  <i
                    className="fa fa-minus-square-o"
                    aria-hidden="true"
                    onClick={() => dispatch(deleteTask(el.id))}
                  ></i>
                </div>
              </div>
            </section>
          ))}
        </h4>
      )}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="title">Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Write a new task here !!"
              aria-label="Write a new task here !!"
              aria-describedby="basic-addon2"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              defaultValue={desic}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={(e) => {
                e.preventDefault();
                dispatch(editTask({ id: id, description: desc }));
                handleClose();
              }}
            >
              Edit Task
            </Button>
          </InputGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Task;
