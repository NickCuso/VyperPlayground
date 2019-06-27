########################
# Example 1
########################

@private
@constant
def _privateMethod(_data: bytes[256]):
  pass


@public # this fails with `stack underflow` 
def publicMethod():
  self._privateMethod("")

  
@public # this works
def publicMethodWithData(_data: bytes[256]):
  self._privateMethod(_data)

########################
# Example 2
########################

@private
@constant
def _toPrivate(_data: bytes[256]):
  self._privateMethod(_data)

@public # this fails with `invalid JUMP`
def publicMethodWithHop(_data: bytes[256]):
  self._toPrivate(_data)
