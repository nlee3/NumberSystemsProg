function ConversionPart1() {

    var UnsignedInt = parseInt(document.getElementById("1_UnsignedInt").value);
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);
    var ValueOne = "";

    for (int i= 0; i < String(UnsignedInt).length; i++)
    {
        ValueOne += ValueOne + (String)(parseInt(UnsignedInt.charAt(i))* Math.pow(UnsignedIntBaseFrom, String(UnsignedInt).length - i);
        //ValueOne += ValueOne + (String)(parseInt(UnsignedInt.charAt(i)) * UnsignedIntBaseFrom);
    }

    var OutputValue = ValueOne;
    var NewNumber = "";
    while (OutputValue != 0)
    {
      NewNumner = (OutputValue%UnsignedIntBaseTo) + NewNumber;
      OutputValue = OutputValue/UnsignedIntBaseTo;
    }



    // Show the output on the screen
    FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}
