function getPositions() {
  let styles = [];
  const tasks = document.querySelectorAll("div.task-div");
  for (let i = 0; i < tasks.length; i++) {
    if (document.getElementById("task-" + i) != null) {
      let position = {
        top: document.getElementById("task-" + i).style.top,
        left: document.getElementById("task-" + i).style.left
      };
      if (position.top === "") {
        position.top = "0px";
      }
      if (position.left === "") {
        position.left = "0px";
      }
      position.top = position.top.substring(0, position.top.length - 2);
      position.left = position.left.substring(0, position.left.length - 2);

      styles.push(position);
    }
  }
  return styles;
}

export default getPositions;
