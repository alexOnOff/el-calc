add_library(Calc-cpp-ffi SHARED "calc.cpp" "calc.h")

if (CMAKE_VERSION VERSION_GREATER 3.12)
  set_property(TARGET Calc-cpp-ffi PROPERTY CXX_STANDARD 20)
endif()