import unittest, requests

class TestUser(unittest.TestCase):

    def test_user_can_search_for_flights(self):
        response = requests.post("http://localhost:3003/flights/?from='anything'&to='anything'")

        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()