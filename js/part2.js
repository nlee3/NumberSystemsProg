function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);
    var Sign;

    SignedDecimalInt 

    var outputValue = "010110101000110110011101";
    var outputValueTwosComplement = "101001010111001001100011";

    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}
