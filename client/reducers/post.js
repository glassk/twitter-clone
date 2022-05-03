export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '너리',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://cdn.pixabay.com/photo/2022/04/26/15/46/horse-7158629_1280.jpg',
        },
        {
          src: 'https://cdn.pixabay.com/photo/2022/04/05/20/21/jack-russell-terrier-7114378_1280.jpg',
        },
        {
          src: 'https://cdn.pixabay.com/photo/2022/04/03/08/37/birds-7108368_1280.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'neori',
          },
          content: '멋져요~',
        },
        {
          User: {
            nickname: 'glass',
          },
          content: '너무 귀여워요...',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '너리',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
