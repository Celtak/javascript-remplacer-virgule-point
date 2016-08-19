// insérez le nombre avec une virgule, la fonction le retournera avec un point de type numérique
function remplacer_virgule_par_point(decimal)
        {
                    decimal = decimal+"";
                    decimal = decimal.replace(",",".");
                    decimal = parseFloat(decimal);
                    return decimal; // renvoie le nombre décimal avec un point
        }