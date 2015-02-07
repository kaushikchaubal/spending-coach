from services.rules import KeywordRule


class Parser(object):

    def __init__(self, reader):
        self.reader = reader
        self.rules = [
            KeywordRule('ATM', ['CASH', 'WITHDRAW']),
            KeywordRule('Food', ['Tesco', 'Sainsbury', 'Asda', 'Lidl'])
        ]

    def convert(self, data_frame):
        info = []
        for index, row in data_frame.iterrows():
            info.append(self.convert_row(row))
        return info

    def convert_row(self, row):
        return {
            'date': row['DATE'],
            'description': row['DESCRIPTION'],
            'amount': row['AMOUNT'],
            'is_expense': row['IS_EXPENSE'],
            'category': self.get_category(row['DESCRIPTION'])
        }

    def get_category(self, description):
        for rule in self.rules:
            if rule.check_rule(description):
                return rule.category
        return 'Other'

    def parse(self):
        data_frame = self.reader.get()
        return self.convert(data_frame)
