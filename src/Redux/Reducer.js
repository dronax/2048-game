const initialState = {
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
};

const statereducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":{
      console.log("Payload",action.payload)
      return{
        ...state,
        grid:action.payload
      }
    }
    case "left": {
      return {
        ...state,
        grid:action.payload
      };
    }
    case "right": {
      return {
        ...state,
      };
    }
    case "up": {
      return {
        ...state,
      };
    }
    case "down": {
      return {
        ...state,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default statereducer;
