import { Review } from '../types/reviews';


export const reviews: Review[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://loremflickr.com/320/240/people?random=8',
      isPro: false,
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: 'a23bc678-e2ef-4d29-b6d8-ce4f8f8f8d8d',
    date: '2020-06-14T10:34:22.569Z',
    user: {
      name: 'Elena Smith',
      avatarUrl: 'https://loremflickr.com/320/240/people?random=1',
      isPro: true,
    },
    comment: 'The location is perfect with a beautiful view of the canal, and the interior is warm and welcoming.',
    rating: 5,
  },
  {
    id: 'c45de426-9348-4d8e-a8f2-e2f4c34c1d12',
    date: '2021-04-20T18:20:30.569Z',
    user: {
      name: 'John Doe',
      avatarUrl: 'https://loremflickr.com/320/240/people?random=4',
      isPro: false,
    },
    comment: 'Wonderful stay at this spacious and modern apartment. Close to the city center and all the attractions.',
    rating: 0.1,
  },
  {
    id: 'd56ef429-75e4-4f53-9937-3b5d62f7c9e9',
    date: '2022-01-05T09:12:45.569Z',
    user: {
      name: 'Maria Gonzalez',
      avatarUrl: 'https://loremflickr.com/320/240/people?random=11',
      isPro: true,
    },
    comment: 'We had a fantastic time here! The host was friendly and helpful, and the apartment had everything we needed.',
    rating: 2,
  }

];
