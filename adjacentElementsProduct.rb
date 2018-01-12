def adjacentElementsProduct(inputArray)
    products = []
    inputArray.each_cons(2){|a,b| products.push(a*b)}
    products.max
end