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
          src: 'https://user-images.githubusercontent.com/63575891/167721989-5995cfae-f81d-4b09-9a62-c43b4cdf98df.jpg',
        },
        {
          src: 'https://user-images.githubusercontent.com/63575891/167721994-6a4ecdc9-5fc3-4528-adaa-64f2c28d92dd.jpg',
        },
        {
          src: 'https://user-images.githubusercontent.com/63575891/167722002-346e152b-77b1-4d4e-818d-0a81dedbdbae.jpg',
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
