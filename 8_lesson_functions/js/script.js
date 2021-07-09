let num = 50;
while (num <= 55)
{
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 10; i++)
{
    if (i === 6)
    {
        // break; // raus aus der Schleife, sofern die Bedingung zutrifft.
        continue; // überspringt diesen Durchlauf sobald die obere Bedingung i === 6  erfüllt ist
    }
    console.log(i);
}