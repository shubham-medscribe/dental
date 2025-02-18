//export methods here
export { getValueBykey };

//add new methods here
//write your code

//getValueByKey method mainly find value of key from the object and key can be inside a nested object
// note:- getkey is "key" you have to pass and "obj" is actual object you need to pass
function getValueBykey(obj: Record<string, any>, getkey: string) {
  for (let keys in obj) {
    if (keys == getkey) return obj[keys];

    if (Array.isArray(obj[keys])) continue;

    if (typeof obj[keys] === "object") {
      const result: any = getValueBykey(obj[keys], getkey);

      if (result !== undefined) return result;
    }
  }
  return undefined;
}
