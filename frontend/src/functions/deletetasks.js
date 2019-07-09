function deleteTasks(taskObjects) {
  let output = [];
  const tasklist = document.querySelectorAll("div.task-div");
  tasklist.forEach(task => {
    let positionstr = {
      top: task.style.top,
      left: task.style.left
    };
    let position = {
      top: positionstr.top.substring(0, positionstr.top.length - 2),
      left: positionstr.left.substring(0, positionstr.left.length - 2)
    };
    if (
      window.innerHeight - position.top < 250 &&
      window.innerWidth - position.left < 180
    ) {
      task.style.visibility = "hidden";
      output = taskObjects.filter(taskObject => taskObject.id !== task.id);
    }
  });
  return output;
}

export default deleteTasks;
