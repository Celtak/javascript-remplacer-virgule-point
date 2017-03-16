/**
*
* @param string decimal
*
* @return number
*	return number with point
*/

function remplacer_virgule_par_point(decimal){
	decimal = decimal+"";
	decimal = decimal.replace(",",".");
	decimal = parseFloat(decimal);
	return decimal;
}
