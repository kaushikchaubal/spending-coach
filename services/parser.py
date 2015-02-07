from services.reader import IReader 

class Parser(object):


    def __init__(self, reader):
        self.reader = reader

    def parse(self):
        data_frame = self.reader.get()
        return data_frame

