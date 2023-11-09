const likeButtons = document.querySelectorAll('.card__likes-button');
const likeCounts = document.querySelectorAll('.card__likes-count');

const addLikeHandler = function (like, count) {
  like.addEventListener('click', function() {
    count.textContent++;
  });
};

const addLikes = () => {
  for (let i = 0; i <= likeButtons.length; i++) {
    addLikeHandler(likeButtons[i], likeCounts[i]);
};
};

export {addLikes};
