cmake_minimum_required(VERSION 3.10)
project(Tutorial VERSION 1.0)
# specify the C++ standard
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED True)

add_executable(Tutorial tutorial.cxx)
configure_file(TutorialConfig.h.in TutorialConfig.h)

target_include_directories(Tutorial PUBLIC
                          "${PROJECT_BINARY_DIR}"
                          "${PROJECT_SOURCE_DIR}/MathFunctions"
                          )

add_library(MathFunctions MathFunctions.cxx mysqrt.cxx)
# add the MathFunctions library
add_subdirectory(MathFunctions)
list(APPEND EXTRA_INCLUDES "${PROJECT_SOURCE_DIR}/MathFunctions")

target_link_libraries(Tutorial PUBLIC MathFunctions)
