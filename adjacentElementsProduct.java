int adjacentElementsProduct(int[] inputArray) {
    int largestProduct = inputArray[0] * inputArray[1];
        for(int i = 0; i < inputArray.length-1; i++ ){
            int roundProduct = inputArray[i] * inputArray[i+1];
                if( roundProduct > largestProduct){
                    largestProduct = roundProduct;
                }
        }
    return largestProduct;
}