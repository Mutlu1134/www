using System;

namespace MyApp // Note: actual namespace depends on the project name.
{
    class Car
    {
        public string Marka { get; set; }
        public string Model { get; set; }
        public int Km { get; set; }
        public int ModelYılı { get; set; }

        public string Calistir()
        {
            return $"{this.Marka} {this.Model} Calistirildi...";
        }

        public string Hizlandir()
        {
            return $"{this.Marka} {this.Model} Hizlaniyor...";
        }

        public string Yavasla()
        {
            return $"{this.Marka} {this.Model} Yavaşlıyor...";
        }

        public string Dur()
        {
            return $"{this.Marka} {this.Model} Durduruldu...";
        }

        public string KmSonuc()
        {
            return $"{this.Km + 100}";
        }
        public void Gezmeye_Cik()
        {
            Console.WriteLine(this.Calistir());
            Console.WriteLine(this.Hizlandir());
            Console.WriteLine(this.Yavasla());
            Console.WriteLine(this.Dur());
            Console.WriteLine(this.KmSonuc());
        }

        public void Menu()
        {
            string secim = "";

            do
            {
                Console.WriteLine("Seçiniz: 1-Start 2-Hızlandır 3-Yavasla 4-Dur | Çıkış için: Ç");
                secim = Console.ReadLine();

                switch (secim)
                {
                    case "1":
                        Console.WriteLine(this.Calistir());
                        break;
                    case "2":
                        Console.WriteLine(this.Hizlandir());
                        break;
                    case "3":
                        Console.WriteLine(this.Yavasla());
                        break;
                    case "4":
                        Console.WriteLine(this.Dur());
                        break;
                    default:
                        break;
                }
            } while (secim != "ç");

        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            Car Opel = new Car() { Marka = "Opel", Model = "Astra", Km = 1000, ModelYılı = 2015 };
            Car Ford = new Car() { Marka = "Ford", Model = "Focus", Km = 2000, ModelYılı = 2017 };

            Opel.Gezmeye_Cik();
            System.Console.WriteLine("**********************************************************");
            Console.WriteLine(Ford.Calistir());
            System.Console.WriteLine(Ford.Hizlandir());
            System.Console.WriteLine(Ford.Yavasla());
            System.Console.WriteLine(Ford.Dur());
            Opel.Menu();



        }


    }
}