import API from 'api'

import httpClient from 'utils/httpClient.util'
import { responseHandle } from 'utils/responseHandle.util'

// Functions
export const fetchArticles = (page = 1, limit = 5) => {
  const url = `${API.getAllArticles()}?page=${page}&limit=${limit}`
  const request = httpClient.get(url).then((res) => res.data)

  return async (dispatch) => await responseHandle(dispatch, request)
}

export const fetchArticleById = (id) => {
  console.log(id)
  return async () => await { data: mockArticle }
}

const mockArticle = {
  body:
    'Based on your input, get a random alpha numeric string. The random string generator creates a series of numbers and letters that have no pattern. These can be helpful for creating security codes. With this utility you generate a 16 character output based on your input of numbers and upper and lower case letters.  Random strings can be unique. Used in computing, a random string generator can also be called a random character string generator. This is an important tool if you want to generate a unique set of strings. The utility generates a sequence that lacks a pattern and is random. Throughout time, randomness was generated through mechanical devices such as dice, coin flips, and playing cards. A mechanical method of achieving randomness can be more time and resource consuming especially when a large number of randomized strings are needed as they could be in statistical applications.  Computational random string generators replace the traditional mechanical devices. Possible applications for a random string generator could be for statistical sampling, simulations, and cryptography.  For security reasons, a random string generator can be useful. The generation of this type of random string can be a common or typical task in computer programming.  Some forms of randomness concern hash or seach algorithms.  Another task that is random concerns selecting music tracks. In statistical theory, randomization is an important principle with one possible application involving survey sampling. Many applications of randomization have caused several methods to exist for generating random data. Lottery games is one current application. Slot machine odds are another use random number generators.',
  createdAt: '2021-01-23T06:56:27.133Z',
  photo:
    'https://storage.googleapis.com/part-from-book-storage/article-images/3b0ab99e-3ee2-49c7-bb81-c9b48ba6de98.jpeg',
  title: 'Article by Validated Boy',
  updatedAt: '2021-01-23T06:56:27.133Z',
  writer: {
    dname: 'iamboyv2',
    email: 'thanapongsj1996@gmail.com',
    fname: 'ธนพงษ์',
    info: "i'm the real boy",
    isActive: true,
    lname: 'สมใจ',
    photo:
      'https://storage.googleapis.com/part-from-book-storage/user-images/nopic.png',
    verifyDate: '2021-01-23T06:51:21.084Z',
    verifyId:
      'NhAyVKx5SGePIDqndCkCZ0ozsFmYzoYlsiPaWYUzz41uaAnxc4OvBMTlZifHvB9B',
    _id: '600bbffb94418930ad3feadf',
  },
  _id: '600bc89b1a28d93853ae24b8',
}
