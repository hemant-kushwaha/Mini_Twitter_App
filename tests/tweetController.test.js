import { getTweets } from '../src/Controllers/tweetController.js';
import {mockRequest,mockResponse} from './mocker.js'
import tweetService from '../src/services/tweetService.js';

/* ✅ Best Practice
This structure is actually good practice:

Define a default mock using jest.mock(...).

Customize behavior per test using mockResolvedValue or mockRejectedValue. */

//Mocking
jest.mock('../src/services/tweetService.js', ()=> ({
    getTweets : jest.fn().mockResolvedValue(
        // Response we are mocking  for service layer
        [
            {
                content:'tweet1'
            },
            {
                content:'tweet2'
            }
        ]
    )
}))

test('should return tweets' , async () => {

    const req = mockRequest ();
    const res = mockResponse ();
    await getTweets(req,res);


    //expected response setting
    const response = [ 
        {
            content:'tweet1'
        },
        {
            content:'tweet2'
        }
    ];

    expect(res.json).toHaveBeenCalledWith({
        success: true,
        message:'tweets fetched sucessfully',//tweets fetched sucessfully
        data : response,

    })
})

test('should handle error when getTweets Fails', async () => {
    const req = mockRequest ();
    const res = mockResponse ();

    //Negative Mocking the service layer
    tweetService.getTweets.mockRejectedValue(new Error ('Internal Server Error'));

    await getTweets(req,res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
        success: false,
        message:'Internal Server Error',//tweets fetched sucessfully
 
    })
})

