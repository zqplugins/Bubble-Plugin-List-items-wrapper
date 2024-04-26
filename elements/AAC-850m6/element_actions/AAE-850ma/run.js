function(instance, properties, context) {


  // this returns an array holding the list of texts (strings), booleans (yes/no) and integers (decimals and numbers)
  const getList = (thingWithList, startPosition, finishPosition) => {
    let returnedList = thingWithList.get(startPosition, finishPosition);
    return returnedList;
  }

  let acquiredList = getList(properties[`list_to_be_wrapped`], 0, properties[`list_to_be_wrapped`].length());

  let listWithWrappedItems = [];

  const wrapItems = (item) => {

    wrappedItem = `${properties.prefix}${item}${properties.suffix}`;
    listWithWrappedItems.push(wrappedItem);

  };

  acquiredList.forEach(wrapItems);

  instance.publishState("list_with_wrapped_items", listWithWrappedItems)




}
