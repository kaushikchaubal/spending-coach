import nose
from unittest import TestCase

from parser import Parser
from reader import CsvReader

class SpendingCoachTests(TestCase):

    def test_parser(self):
        reader = CsvReader('samples/test.csv')
        parser = Parser(reader)
        print parser.parse()
