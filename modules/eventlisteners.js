export default function addEventListenersToTheElements(task) {
  const listWrapper = document.querySelectorAll('.check');
  const completed = document.querySelectorAll('.completed');
  const btn = document.querySelectorAll('.del-btn');

  completed.forEach((item) => {
    item.addEventListener('click', () => {
      task.completed(item);
    });
  });

  listWrapper.forEach((item) => {
    item.addEventListener('click', () => {
      task.editTask(item.id, item.innerText);
    });
  });

  btn.forEach((item) => item.addEventListener('click', () => task.deleteTask(item.classList[item.classList.length - 1])));
}
