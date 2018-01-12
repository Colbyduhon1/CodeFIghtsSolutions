def adjacentElementsProduct(inputArray):
    largest_product = inputArray[0]*inputArray[1]
    for index, item in enumerate(inputArray):
            print(index, item)
            if index+1 < len(inputArray):
                if item* inputArray[index+1] > largest_product:
                    largest_product = item * inputArray[index+1]
    return largest_product