def _privateMethod(_data: bytes[256]=""):
  pass

def publicMethod():
  _privateMethod("")

def publicMethodWithData(_data: bytes[256]):
  _privateMethod(_data)
