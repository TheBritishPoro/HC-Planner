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

  render() {
    return (
      <div id="create-task">
        <button id="create-task-button" onClick={this.openModal}>
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
            <textarea className="task-creation" placeholder="Task Name" />
            <textarea
              className="task-creation"
              placeholder="Task Description"
            />
            <textarea
              className="task-creation"
              placeholder="Task Requirements"
            />
          </form>
        </Modal>
      </div>
    );
  }
}

export default Createtaskmodal;
