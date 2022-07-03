using System;

namespace MyApp // Note: actual namespace depends on the project name.
{
    class Operation
    {
        public int sumOperator(params int[] numbers)
        {
            int total = 0;
            foreach (var item in numbers)
            {
                total += item;
            }

            return total;
        }
    }


    internal class Program
    {
        static void Main(string[] args)
        {
            Operation islem = new Operation();
            Console.WriteLine(islem.sumOperator(10));
            Console.WriteLine(islem.sumOperator(10, 20));
            Console.WriteLine(islem.sumOperator(10, 20, 30));
            Console.WriteLine(islem.sumOperator(10, 20, 30, 40));
            Console.WriteLine(islem.sumOperator(10, 20, 30, 40, 50));
        }
    }
}