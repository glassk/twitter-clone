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
          src: 'https://pixabay.com/get/g90c7e16b09c96a84804c4429361653d4f1c9a4901396debbd7780c367deb6ca0726f51e52aa86727cc1bd59be0a8d02aa43f20ebc3172f71ba753fe2dc513b2bddca1616c32b5863fcecd3a270bf89e6_640.jpg',
        },
        {
          src: 'https://pixabay.com/get/g16b443ccda14f9d7f5530f42ce499cd08e9ef429d7d9fca3bb3f63027ab9b1ff3e27784867bd36dacf276f54b6900b3152a0254fc172aa1be4604eb4cd6185a839b096c44acfe9f70d55c0084eec132c_640.jpg',
        },
        {
          src: 'https://pixabay.com/get/g4f9a478724b7b6e4f53e8df93b9b510fe6d6767ee94f144fbb795daa2fecb2ec61ad9e9351db8f4e1f938f373ca104ed6f7a23a94f2534bfcef15f1e0d60f2a0c62bb2e8b977759ad105abe5c9137f56_640.jpg',
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
