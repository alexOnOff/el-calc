#include <iostream>
#ifdef WIN32
#define EXPORT __declspec(dllexport)
#else 
#define EXPORT
#endif

extern "C" double EXPORT Calculate(float operand_first, float operand_second, int operation);