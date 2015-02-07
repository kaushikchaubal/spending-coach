import pandas

class IReader(object):
    
    def get(self):
        pass

class CsvReader(IReader): 

    def __init__(self, filename):
        self.data_frame = pandas.read_csv(filename)
    
    def get(self):
        return self.data_frame 
