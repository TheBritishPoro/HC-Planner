function setPositions(positions) {
  const tasks = document.querySelectorAll("div.task-div");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].style.top = positions[i].top + "px";
    tasks[i].style.left = positions[i].left + "px";
  }
  console.log(tasks);
}

export default setPositions;
