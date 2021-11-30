module.exports = {
  "my-anim": {
    initial: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 0,
      x: 100,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  },
  "my-anim2": {
    initial: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 100,
        type: "spring",
        stiffness: 100,
      },
    },
  },
  "my-anim3": {
    initial: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 200,
        type: "spring",
        stiffness: 100,
      },
    },
  },
};
