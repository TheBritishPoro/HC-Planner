import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

class Createtaskmodal extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  };

  afterOpenModal = () => {
    // references are now synced and can be accessed
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };

  handleClick = () => {
    const name = document.getElementById("input-name").value;
    const description = document.getElementById("input-description").value;
    const requirements = document.getElementById("input-requirements").value;
    this.props.renderTask(name, description, requirements);
    this.closeModal();
  };

  render() {
    return (
      <div id="create-task">
        <button className="btn-standard" onClick={this.openModal}>
          Create Task
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Create Task</h2>
          <form>
            <textarea
              id="input-name"
              className="task-creation"
              placeholder="Task Name"
            />
            <textarea
              id="input-description"
              className="task-creation"
              placeholder="Task Description"
            />
            <textarea
              id="input-requirements"
              className="task-creation"
              placeholder="Task Requirements"
            />
          </form>
          <button
            style={{ float: "right" }}
            className="btn-standard"
            onClick={this.handleClick}
          >
            Create
          </button>
        </Modal>
      </div>
    );
  }
}

export default Createtaskmodal;
