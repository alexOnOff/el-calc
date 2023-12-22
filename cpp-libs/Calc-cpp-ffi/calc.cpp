#include "calc.h"

double Calculate(double operand_first, double operand_second, int operation)
{
    switch (operation)
    {
    case 0:
        printf("First - %f, second - %f, op - %d", operand_first, operand_second, operation );
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