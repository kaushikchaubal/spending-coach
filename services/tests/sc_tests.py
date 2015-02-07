import nose
from unittest import TestCase

from services.parser import Parser
from services.reader import CsvReader

class SpendingCoachTests(TestCase):

    def test_parser(self):
        reader = CsvReader('tests/samples/sample_statement.csv')
        parser = Parser(reader)
        print "asdasd" 
        print parser.parse()
