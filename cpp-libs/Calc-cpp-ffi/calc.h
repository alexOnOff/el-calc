#include <iostream>
#ifdef _WIN32 || WIN32
#define EXPORT __declspec(dllexport)
#else 
#define EXPORT
#endif

extern "C" double EXPORT Calculate(double operand_first, double operand_second, int operation);