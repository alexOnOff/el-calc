#include "calc.h"

double Calculate(float operand_first, float operand_second, int operation)
{
    switch (operation)
    {
    case 0:
        return operand_first + operand_second;
    case 1:
        return operand_first - operand_second;
    case 2:
        return operand_first * operand_second;
    case 3:
        return operand_first / operand_second; 
    default:
        throw std::exception();
        break;
    }
}