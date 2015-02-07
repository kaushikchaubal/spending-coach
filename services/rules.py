class IRule(object):

    def __init__(self, statement_type):
        self.statement_type = statement_type

    def check_rule(self, description):
        pass


class KeywordRule(object):

    def __init__(self, statement_type, keyword):
        super(KeywordRule, self).__init__(statement_type)
        self.keyword = keyword

    def check_rule(self, description):
        return description.find(self.keyword) != -1
