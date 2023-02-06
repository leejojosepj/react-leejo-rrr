const initialState = {
  personalDetails: {},
  education: [],
  workExperience: [],
  pageCount: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PERSONAL_DETAILS":
      return { ...state, personalDetails: action.details };
    case "UPDATE_EDUCATION":
      console.log("edu reducer");
      return { ...state, education: action.education };
    case "UPDATE_WORK_EXPERIENCE":
      return { ...state, workExperience: action.experience };
    case "UPDATE_PAGE_COUNT":
      console.log("edu reducer:", action.pageCount);
      return { ...state, pageCount: action.pageCount };
    default:
      return state;
  }
};

export default rootReducer;
