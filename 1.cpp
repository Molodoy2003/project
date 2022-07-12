#include <iostream>
#include <math.h>

int main();
double dbl();
float flt();

int main()
{
    short int n;
    std::cout << "\nChoose what do you want to do: \n1 - Calculate with double\n 2 - Calculate with float\n Your choose: ";
    std::cin >> n;
    if (n == 1)
    {
        std::cout << dbl();
    }
    else if (n != 1 && n != 2)
    {
        std::cout << flt();
    }
    else
    {
        std::cout << flt();
    }
    return 0;
}

double dbl()
{
    double a = 1000;
    double b = 0.0001;
    double s, h, w, q;
    s = pow((a + b), 2);
    std::cout << s << " pow((a + b), 2)\n";
    h = (pow(a, 2) - (2 * pow(a, 1) * pow(b, 2)));
    std::cout << h << " pow(a, 2) - (2 * pow(a, 1) * pow(b, 2))\n";
    w = (pow(b, 2));
    std::cout << w << " pow(b, 2)\n";
    q = (s - h) / w;
    return q;
}

float flt()
{
    float a = 1000;
    float b = 0.0001;
    float s, h, w, q;
    s = pow((a + b), 2);
    std::cout << s << " pow((a + b), 2)\n";
    h = (pow(a, 2) - (2 * pow(a, 1) * pow(b, 2)));
    std::cout << h << " pow(a, 2) - (2 * pow(a, 1) * pow(b, 2))\n";
    w = (pow(b, 2));
    std::cout << w << " pow(b, 2)\n";
    q = (s - h) / w;
    return q;
}