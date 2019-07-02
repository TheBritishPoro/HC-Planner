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
    document.getElementById("create-button").tabIndex = -1;
    document.getElementById("input-name").focus();
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };

  handleSubmit = () => {
    const nameInput = document.getElementById("input-name");
    const descriptionInput = document.getElementById("input-description");
    const requirementsInput = document.getElementById("input-requirements");
    this.props.renderTask(
      nameInput.value,
      descriptionInput.value,
      requirementsInput.value
    );
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
            id="create-button"
            style={{ float: "right" }}
            className="btn-standard"
            onClick={this.handleSubmit}
          >
            Create
          </button>
        </Modal>
      </div>
    );
  }
}

export default Createtaskmodal;
