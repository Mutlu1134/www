using System;
namespace HelloWorld
{
    class Program
    {
        class Person
        {
            public string name { get; set; }

            public string surName { get; set; }

            public int birthYear { get; set; }

            public string Intro()
            {
                return $"Name : {name} Surname : {surName} Year of birth {birthYear}";
            }

            public int calculateYear()
            {
                return DateTime.Now.Year - this.birthYear;
            }
        }
        static void Main(string[] args)
        {
            Person prsn1 = new Person()
            {
                name = "Mmmm",
                surName = "Çççç",
                birthYear = 1994
            };

            Person prsn2 = new Person()
            {
                name = "Bbbb",
                surName = "Çççç Ççç",
                birthYear = 1994
            };

            Console.WriteLine(prsn1.Intro());
            Console.WriteLine($"Your age :{prsn1.calculateYear()} ");
            Console.WriteLine(prsn2.Intro());
            Console.WriteLine($"Your age :{prsn2.calculateYear()} ");
        }
    }
}